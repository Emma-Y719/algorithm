const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const data = JSON.parse(await readline());
    const valid = (await readline()).split(',').map(i => parseInt(i));
    const res = {};
    const paths = [];
    function getPath ()
    console.log(res);
}()