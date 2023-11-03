/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [];
    let targetI = 0;
    for(let i=1;i<=n&&targetI<target.length;i++){
        res.push("Push");
        if(target[targetI] == i){
            targetI++;
        }else{
            res.push("Pop");
        }
    }
    return res;
};