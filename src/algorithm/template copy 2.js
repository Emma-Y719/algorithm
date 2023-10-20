const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const n = parseInt(await readline());
    const map = new Array(11);
    for (let i = 0; i < 11; i++) {
        map[i] = [];
    }
    let res = 0;
    for (let i = 0; i < n; i++) { 
        const arr = (await readline()).split('');
        arr.sort();
        const s = arr.join('');
        map[s.length].push(s);
    }
    for (let i = 0; i < 11; i++) {
        while (map[i].length) {
            const tar = map[i].pop();
            let count = 0;
            for (let j = 0; j < map[i].length; j++) {
                if (tar === map[i][j]) {
                    count++;
                    map[i].splice(j, 1);
                    j--;
                }
            }
            if (count === 0) {
                continue;
            } else if (count === 1) {
                res += 1;
            } else {
                res += count*(count-1) / 2;
            } 
        }

    }
    console.log(res);
}()