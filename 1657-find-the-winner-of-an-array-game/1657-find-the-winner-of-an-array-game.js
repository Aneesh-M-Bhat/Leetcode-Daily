/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findMax(arr){
    let res = {max:0,pos:0}
    for(i in arr){
        if(arr[i]>res.max){
            res.max = arr[i];
            res.pos = i;
        }
    }
    return res;
}

var getWinner = function(arr, k) {

    let {max,pos} = findMax(arr);
    if(k>=pos)return max;

    let first = 0,second = 1,inc=0;

    for(let i=1;i<arr.length;i++){
        second = i;
        if(arr[first]<arr[second]){
            first = second;
            inc = 1;
        }else{
            inc++;
        }
        if(inc==k)return arr[first];
    }

    return max;
};