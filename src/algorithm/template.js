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