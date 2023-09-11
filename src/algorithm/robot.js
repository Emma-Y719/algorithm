const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const s = await readline();
    let x = 0;
    let y = 0;
    for (let i = 0; i < s.length / 2; i++) {
        const direction = s.slice(2*i, 2*i+1);
        const step = parseInt(s.slice(2*i+1, 2*i+2));
        switch (direction) {
            case 'e':
                x += step;
                break;
            case 's':
                y += step;
                break;
            case 'w':
                x -= step;
                break;
            case 'n':
                y -= step;
                break;
        }
    }
    console.log(`${x},${y}`);
}()