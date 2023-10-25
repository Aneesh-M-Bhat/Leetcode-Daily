/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return recur(n-1,k-1);
};

var recur = (n,k) => {
    if(n==0)return 0;
    var prev = recur(n-1,Math.floor(k/2));
    if(prev==0)return k%2==1?1:0;
    else return k%2==1?0:1;
}

