/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let traverse = (node,map) => {
    if(node.left)traverse(node.left,map);
    
    //evaluate
    if(node.val in map){
        map[node.val]++;
    }else{
        map[node.val] = 1;
    }

    if(node.right)traverse(node.right,map);
}

let evaluate = (map) => {
    let res = [];
    let max = 0;
    console.log(map);
    for(i in map){
        if(map[i]>max){
            res = [i];
            max = map[i];
        }else if(map[i] == max){
            res.push(i);
        }
    }
    return res;
}

var findMode = function(root) {
    let map = {};
    traverse(root,map);
    return evaluate(map);
};