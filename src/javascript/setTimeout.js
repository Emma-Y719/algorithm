// setTimeout延迟执行函数，但传入函数的值在setTimeout执行时已经复制
const test1 = theme => setTimeout(() => console.log(theme), 500);//复制theme的值 即'black'
const test2 = config => setTimeout(() => console.log(config.theme), 500);//复制config的地址

config = { theme: 'black' };
test1(config.theme);
test2(config);
setTimeout(() => config.theme = 'white', 300);