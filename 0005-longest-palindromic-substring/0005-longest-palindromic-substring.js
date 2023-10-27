/**
 * @param {string} s
 * @return {string}
 */
let map = {};

var checkPalindrome = (s,high,low) => {
    for(let i=0;i<(high-low)/2;i++){
        if(s[low+i]!=s[high-i])return false;
    }
    return true;
}

var longestPalindrome = function(s) {
    map = {};
    for(i in s){
        if(s[i] in map){
            map[s[i]].push(i);
        }else{
            map[s[i]] = [i];
        }
    }
    let res = "";
    for(i in map){
        for(let j=0;j<map[i].length;j++){
            let low = Number(map[i][j]);
            for(let k=map[i].length-1;k>=j;k--){
                let high = Number(map[i][k]);
                if(res.length>high-low+1)break;
                if(checkPalindrome(s,high,low))res = s.slice(low,high+1);
            }
        }
    }
    return res;
};