//给一棵树，节点值是0或1，输出满足1的数量比0的数量多1的路径数量（根节点到叶子节点的路径）
function pathNumber(root) {
  let count0 = 0;
  let count1 = 0;
  // const path = [];
  return dfs(root,count0,count1);
}
function dfs( node,count0,count1) {
  if (node === null) {
    // const tmp = path.pop();
    if (count1 - count0 === 1) {
      // if (tmp.val === 0) {
      //   count0--;
      // } else {
      //   count1--;
      // }
      return 1;
    } else {
      return 0;
    }
  }
  if (node.val === 0) {
    count0++;
  } else {
    count1++;
  }
  path.push(node);
  return dfs(node.left,count0,count1) + dfs(node.right,count0,count1);
}
module.exports = {
    pathNumber : pathNumber
};