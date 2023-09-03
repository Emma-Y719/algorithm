const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 如果数组的相邻两项x,y满足x<=y,那么可以将两项合并，可进行多次合并，求最终能得到的最大项
// 2 5 4 1 2
//合并后： 7 4 3 最大项是7
void async function () {
    // Write your code here
    const arr = (await readline()).split(' ').map(item => parseInt(item));
    function maxItem(arr) { 
        if (arr.length === 1) return arr[0];
        let isOperate = false;
        for (let i = 0; i < arr.length - 1; i++) { //小心下标不要越界
            if (arr[i] <= arr[i + 1]) { 
                arr.splice(i, 2, arr[i] + arr[i + 1]);
                isOperate = true;
            }
        }
        if (isOperate === false) {
            return arr.sort()[arr.length - 1];
        } else {
            return maxItem(arr); // 递归一定要记得return!!!
        }
    }
    console.log(maxItem(arr));
}()