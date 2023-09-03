async function async1(){
  console.log('1')
  await async2()
  console.log('2')
}
async function async2(){
  console.log('3')
}
console.log('4')
setTimeout(function(){
  console.log('5') 
},0)  
async1();
new Promise(function(resolve){
  console.log('6')
  resolve();
}).then(function(){
  console.log('7')
})
console.log('8')
// 4
// 1
// 3
// 6
// 8
// 7
// 2
// 5

const promise = new Promise((resolve) => {
  setTimeout(() => { 
    console.log('once');
    resolve('success');
  }, 1000);
  
})
promise.then((res) => { 
  console.log(res, 1);
  promise.then((res) => console.log(res, 2));
})
// once
// success 1
// success 2