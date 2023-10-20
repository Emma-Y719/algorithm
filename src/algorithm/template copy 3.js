const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const tokens = (await readline()).split(' ');
    const n = parseInt(tokens[0]);
    let h = parseInt(tokens[1]);
    let count = 0;
    for (let i = 0; i < n; i++) {
        const tokens2 = (await readline()).split(' ');
        const t = parseInt(tokens[0]);
        const x = parseInt(tokens[1]);
        switch (t) {
            case 1:
                count += x;
                break;
            case 2:
                h -= x;
                break;
        }
    }
    if (count * 6 < h) {
        console.log(0);
    } else if (count >= h) {
        console.log(1);
    } else {
        const total = Math.pow(6, count);
        const p = new Array(count * 6 + 1);
        
    }
}()