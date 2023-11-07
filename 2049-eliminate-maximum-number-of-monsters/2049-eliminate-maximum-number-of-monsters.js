/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let time = [];
    for(let i in dist){
        time.push(dist[i]/speed[i]);
    }
    time.sort((a,b)=>a-b);
    // console.log(time);
    let elim=0;
    for(let i in time){
        if(time[i]<=i)return elim;
        elim++; 
    }
    return elim;
};