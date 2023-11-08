/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    if(sx==fx&&sy==fy&&t==1)return false;

    const dx = Math.abs(sx-fx);
    const dy = Math.abs(sy-fy);
    const minDiff = Math.min(dx,dy);
    const diff = Math.abs(dx-dy);

    const minTime = minDiff+diff;

    if(t>=minTime)return true;
    return false;

};