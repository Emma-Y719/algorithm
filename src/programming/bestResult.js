const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // 勇士打怪，初始等级a,怪兽数量n,怪兽所需级别arr,打过一个怪得一个金币，升一级花一个金币，不用按顺序打
    // 输出所能拿到金币的最大值
    /* case:
    输入
    1 3
    2 2 1
    输出
    2
    */
    const tokens = (await readline()).split(' ');
    let a = parseInt(tokens[0]);
    const n = parseInt(tokens[1]);
    const arr = (await readline()).split(' ').map(i => parseInt(i)).sort();
    let res = 0;
    let money = 0;
    let cur = arr[0];
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === cur) {
            count ++;
        } else {
            const cost = cur - a;
            if (money < cost) {
                break;
            } else { 
                money += cost > 0 ? count - cost : count;
                a = Math.max(a, cur);
                res = Math.max(money, res);
                cur = arr[i];
                count = 1;
            }
            
        }
    }
    const cost = cur - a;
    if (cost < count) {
        res += count - cost;
    }
    console.log(res);
}()