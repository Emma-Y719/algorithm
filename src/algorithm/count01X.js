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