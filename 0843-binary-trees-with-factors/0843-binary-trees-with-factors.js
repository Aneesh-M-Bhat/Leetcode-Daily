var numFactoredBinaryTrees = function (arr) {
  let map = {};
  let res = 0;
  arr.sort((a, b) => a - b);
  for(let i=0;i<arr.length;i++){
      map[arr[i]] = 1;
      for(let j=0;j<i;j++){
          if(arr[i]%arr[j]==0&&map[arr[i]/arr[j]]){
              map[arr[i]] += map[arr[j]]*map[arr[i]/arr[j]];
              
          }
      }
      console.log("Value"+map[arr[i]]); 
      res = (res+map[arr[i]])%1000000007;
  }
  return res;
};
