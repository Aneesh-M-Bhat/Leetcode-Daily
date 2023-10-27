/**
 * @param {string} s
 * @return {string}
 */
var reverseString = (s) => {
    let splitStr = s.split("");
    let revArr = splitStr.reverse();
    let joinStr = revArr.join("");
    return joinStr;
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
                let temp = s.slice(low,high+1);
                if(reverseString(temp) == temp)res = temp;
            }
        }
    }
    return res;
};