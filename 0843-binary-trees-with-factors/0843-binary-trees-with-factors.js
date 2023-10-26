var numFactoredBinaryTrees = function (arr) {
  let map = {};
  let res = 0;
  arr.sort((a, b) => a - b);
  for(let i=0;i<arr.length;i++){
      map[arr[i]] = 1;
      for(let j=0;j<i;j++){
          let factor = map[arr[j]];
          let otherFactor = map[arr[i]/arr[j]];
          if(arr[i]%arr[j]==0&&otherFactor){
              map[arr[i]] += factor*otherFactor;
              
          }
      }
      res = (res+map[arr[i]])%1000000007;
  }
  return res;
};
