const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 给一个字母表，输出分别以y o u 三个字母为顶点的直角三角形个数
// 输入： 行数n 列数m
//       字母表
// 输出： 直角三角形数量
void async function () {
    const [n, m] = (await readline()).split(' ').map(i => parseInt(i));
    const rowMap = new Array(n);
    const colMap = new Array(m);
    const map = new Array(n);
    let res = 0;
    for (let i = 0; i < n; i++) {
        const line = await readline();
        let y = 0;
        let o = 0;
        let u = 0;
        map[i] = [];
        for (let j = 0; j < m; j++) {
            const ch = line.charAt(j);
            switch (ch) {
                case 'y':
                    y++;
                    map[i].push('y');
                    break;
                case 'o':
                    o++;
                    map[i].push('o');
                    break;
                case 'u':
                    u++;
                    map[i].push('u');
                    break;
                default:
                    map[i].push('');
                    break;
            }
        }
        const rowMapi = new Map();
        rowMapi.set('y',y);
        rowMapi.set('o',o);
        rowMapi.set('u',u);
        rowMap[i] = rowMapi;
    }
    for (let i = 0; i < m; i++) {
        let y = 0;
        let o = 0;
        let u = 0;
        for (let j = 0; j < n; j++) {
            const ch = map[j][i];
            switch (ch) {
                case 'y':
                    y++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
                default:
                    break;
            }
        }
        const colMapi = new Map();
        colMapi.set('y',y);
        colMapi.set('o',o);
        colMapi.set('u',u);
        colMap[i] = colMapi;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const ch = map[i][j];
            switch (ch) {
                case 'y':
                    res += rowMap[i].get('o') * colMap[j].get('u');
                    res += rowMap[i].get('u') * colMap[j].get('o');
                    break;
                case 'o':
                    res += rowMap[i].get('y') * colMap[j].get('u');
                    res += rowMap[i].get('u') * colMap[j].get('y');
                    break;
                case 'u':
                    res += rowMap[i].get('o') * colMap[j].get('y');
                    res += rowMap[i].get('y') * colMap[j].get('o');
                    break;
            }
        }
    }
    console.log(res);

}()
