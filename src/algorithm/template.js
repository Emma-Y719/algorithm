const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const tokens = (await readline()).split(' ');
    let a = parseInt(tokens[0]);
    const n = parseInt(tokens[1]);
    const arr = (await readline()).split(' ').map(i => parseInt(i)).sort();
    console.log(res);
}()

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 输入一个只有01的字符串，输出 所有前缀都满足1的个数都大于0的个数 的子串 的数量
void async function () {
    const s = await readline();
    let res = 0;
    let l = 0;
    let r = -1;
    let count0 = 0;
    let count1 = 0;
    while (l <= s.length) {
        if (r < s.length) {
            if (count0 <= count1) {
                r++;
                switch(s.charAt(r)) {
                    case '0':
                        count0 ++;
                        break;
                    case '1':
                        count1 ++;
                        break;                    
                }
            } else {
                switch(s.charAt(l)) {
                    case '0':
                        count0 --;
                        res++;
                        break;
                    case '1':
                        count1 --;
                        break;                    
                }  
                l++;              
            }
        } else {
            if (count0 <= count1) {
                break;
            } else {
                switch(s.charAt(l)) {
                    case '0':
                        count0 --;
                        res++;
                        break;
                    case '1':
                        count1 --;
                        break;                    
                }  
                l++;              
            }
        }
    }
    console.log(res);
}()

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
//从左上角走到右下角，每秒走一步，和爆炸的炸弹同行和同列会被炸死
//输入：T组数据
//     地图的行列 n, m 
//     地图 -1：障碍物 其他数字t：在t秒爆炸的炸弹
//输出：到达目的地的最短时间，如果不能到达则返回-1     

void async function () {
    // Write your code here
    const T = parseInt(await readline());
    while (line = await readline()) {
        const tokens = line.split(' ');
        const n = parseInt(tokens[0]);
        const m = parseInt(tokens[1]);
        const map = [];
        for (let i = 0; i < n; i++) {
            const arr = (await readline()).split(' ').map(i => parseInt(i));
            map.push(arr);
        }
        const res = dfs(0, 0, 0, map, m, n);
        console.log(res === Infinity ? -1 : res);

    }
    function dfs(x, y, time, map,m,n) {
        if (x === m - 1 && y === n - 1) return time;
        if (x < 0 || x > m - 1 || y < 0 || y > n - 1) return Infinity;
        if (map[x][y] === -1) return Infinity;
        for (let i = 0; i < n; i++) {
            if (map[i][y] === time) return Infinity;
        }
        for (let j = 0; j < m; j++) {
            if (map[x][j] === time) return Infinity;
        }
        time++;
        return Math.min(dfs(x - 1, y, time, map,m,n), dfs(x + 1, y, time, map,m,n), dfs(x, y-1, time, map,m,n), dfs(x, y+1, time, map,m,n));
    }
}()

// 5
// 4 4
// 0   0   0   0
// -1  -1  4   0
// -1  -1  2   0
// -1  -1  -1  0
// 1 5
// 0 0 0 4 0
// 1 5
// 0 0 0 3 0
// 3 3
// 0   0   1
// 0   -1  0
// -1  -1  0
// 3 3
// 0 0 0
// 0 0 -1
// 0 -1 0