const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function bpg( s ) {
        // write code here
        const n = s.length;
        const arr = new Array(Math.log2(n));
        for (let i = 0; i < arr.length; i++) {
            arr[i] = [];
        }
        let ans = '';
        for (let i = 0; i < n; i++){
            if (s.charAt(i) === '0') {
                ans += 'B';
                arr[0].push('B');
            } else {
                ans += 'P';
                arr[0].push('P');
            }
            check(0);
        }
        return ans;
        function check (num) {
            if (arr[num].length===2) {
                const tmp = merge(arr[num]);
                ans += tmp;
                arr[num] = [];
                if (num < arr.length-1) {
                    arr[num+1].push(tmp);
                    check (num+1);
                }
            }
        }
        function merge(arr2) {
            const l = arr2[0];
            const r = arr2[1];
            if (l === 'P' && r === 'P') {
                return 'P';
            } else if (l === 'B' && r === 'B') {
                return 'B';
            } else {
                return 'G';
            }
        }
    }
    console.log(bpg("10"));
}()