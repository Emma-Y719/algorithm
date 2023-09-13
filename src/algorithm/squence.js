const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
//序列：包含从1到n的所有数字，不重复, 最多只交换一次，是否有长度为k的子序列
//输入: 序列长度n 新长度k
//     序列
//输出：YES/NO
//     最少要交换的次数
//     交换的数字的下标
void (async function () {
  const tokens = (await readline()).split(" ");
  const n = parseInt(tokens[0]);
  const k = parseInt(tokens[1]);
  const arr = (await readline()).split(" ").map((i) => parseInt(i));
  const pos1 = arr.indexOf(1);
  const set = new Set();
  for (let i = 1; i < k + 1; i++) {
    set.add(i);
  }
  if (n <= 2 || k <= 1) {
    console.log("YES");
    console.log(0);
  } else {
    let l = Math.max(0, pos1 - k + 1);
    let r = l;
    const max = Math.min(n - 1, pos1 + k - 1);
    for (let i = l; i < l + k; i++) {
      if (set.has(arr[r])) {
        set.delete(arr[r]);
      }
      r++;
      
    }
    while (r <= max + 1) {
      if (set.size === 0) {
        // set.size是属性 不是方法！
        console.log("YES");
        console.log(0);
        break; //while中一定要记得break! 否则会不断打印
      } else if (set.size === 1) {
        let tar = 0;
        for (let i = l; i <= r; i++) {
          if (arr[i] > k) {
            tar = i;
            break;
          }
        }
        console.log("YES");
        console.log(1);
        console.log(`${tar} ${arr.indexOf(set.values().next().value)}`); //set.values()返回迭代器
        break;
      } else {
        if (set.has(arr[r])) {
          set.delete(arr[r]);
        }
        if (arr[l] <= k) {
          set.add(arr[l]);
        }
        r++;
        l++;
      }
    }
    if (set.size > 1) {
      const pos2 = arr.indexOf(2);
      let l = Math.max(0, pos2 - k + 1);
      let r = l;
      const max = Math.min(n - 1, pos2 + k - 1);
      set.clear();
      for (let i = 1; i < k + 1; i++) {
        set.add(i);
      }
      for (let i = l; i < l + k; i++) {
        if (set.has(arr[r])) {
          set.delete(arr[r]);
        }
        r++;
      }
      while (r <= max + 1) {
        if (set.size === 0) {
          console.log("YES");
          console.log(0);
          break;
        } else if (set.size === 1) {
          let tar = 0;
          for (let i = l; i <= r; i++) {
            if (arr[i] > k) {
              tar = i;
              break;
            }
          }
          console.log("YES");
          console.log(1);
          console.log(`${tar} ${arr.indexOf(1)}`);
          break;
        }
        r++;
      }
      if (set.size > 1) {
        console.log("NO");
      }
    }
  }
})();
