const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

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