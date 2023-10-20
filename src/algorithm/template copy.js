const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const t = parseInt(await readline());
    for (let i = 0; i < t; i++) {
        const n = parseInt(await readline());
        const arr = (await readline()).split(' ').map(i => parseInt(i));
        if (n % 2 === 1) {
            console.log('YES');
        } else {
            const arr1 = [];
            const arr2 = [];
            for (let j = 0; j < n; j++) {
                if (j % 2 === 0) {
                    arr1.push(arr[j]);
                } else {
                    arr2.push(arr[j]);
                }
            }
            arr1.sort();
            arr2.sort();
            let flag = false;
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[j] <= arr2[j]) {
                    continue;
                } else {
                    console.log('NO');
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                console.log('YES');
            }
        }
        
    }
}()