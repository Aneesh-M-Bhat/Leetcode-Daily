/**
 * @param {number[]} arr
 * @return {number[]}
 */
 
function count(num) {
  let count = 0;
  while(num>0){
      count++;
      num &= (num-1);
  }
  return count;
}

var sortByBits = function(arr) {
    arr.sort((a,b)=>{
        let x = count(a);
        let y = count(b);
        return x==y?a-b:x-y;
    });
    return arr;
};