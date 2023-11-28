// 1创建一个新的空对象
// 2将空对象的 __proto__ 指向构造函数的原型
// 3改变 this 的指向，指向空对象
// 4对构造函数的返回值做判断，然后返回对应的值
// 一般是返回第一步创建的空对象；
// 但是当构造函数有返回值时 则需要做判断再返回对应的值，是 对象类型则返回该对象，是 原始类型则返回第一步创建的空对象。

function myNew (constructor, ...args) {
    let obj = new Object();
    obj._proto_ = constructor.prototype;
    //Object.setPrototypeOf(obj, constructor.prototype);
    let res = constructor.apply(obj,args);
    console.log(res);
    return typeof res === 'object' ? res || obj : obj;
    // typeof null === 'object' => true
}