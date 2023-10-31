/**
 * @param {number[]} pref
 * @return {number[]}
 */

var findArray = function(pref) {
    let arr = [];
    let temp = 0;
    for( i in pref ){
        if(i==0)temp = pref[i];
        else temp = pref[i] ^ pref[i-1];
        arr.push(temp);
    }
    return arr;
};