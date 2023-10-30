/**
 * @param {number[]} arr
 * @return {number[]}
 */
function count(str) {
  var sum = 0;
  
  for (var i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  }
  
  return sum;
}

var sortByBits = function(arr) {
    arr.sort((a,b)=>{
        let x = count((a >>> 0).toString(2));
        let y = count((b >>> 0).toString(2));
        return x==y?a-b:x-y;
    });
    return arr;
};