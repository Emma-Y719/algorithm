function formatNum (num) {
    let numString = num + '';
    let ans = [];
    let count = 0;
    for (let i = numString.length; i >= 0; i--){
        count ++;
        if (count % 3 === 0) {
            ans.push(',');
        }
        ans.push(numString.charAt(i));
    }
    if (ans[ans.length] === ',') {
        ans.pop();
    }
    return ans.reverse().join('');
}
formatNum(1234567890);