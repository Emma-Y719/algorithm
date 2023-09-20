// exector onFufilled onRejected 是传入的回调函数
//exector是接受resolve和reject两个回调函数作为参数的函数，resolve reject是用来改变promise状态的函数
//onFufilled 是promise状态为fulfilled时执行的函数 
//onRejected 是promise状态为rejected时执行的函数
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const isfunction = variable => typeof variable === 'function';

class MyPromise {
  constructor(exector) {
    if (!isfunction(exector)) {
      throw new Error ('MyPromise must accept a function as a parameter')
    }

    this._status = PENDING;
    this._value = undefined;
    // 执行函数内有异步操作时，将onFulfilled/onRejected函数放入队列，等异步任务完成时会再调用（相当于又执行一遍then）
    this._onFulfilledCallbacks = [];
    this._onRejectedCallbacks = [];

    const _resolve = value => {
      if (this.status === PENDING) {
        this._status = FULFILLED;
        this._value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(this._value));
      }
    }
    const _reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this._value = reason;
        this.onRejectedCallbacks.forEach(fn => fn(this._value));
      }
    }
    try {
      exector(_resolve, _reject); //构造器接受一个执行函数，并立即执行
    } catch (e) {
      _reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    const self = this;//self指代当前调用then的promise
    // 实现then的链式调用,返回一个新promiseT,
    // promiseT的状态取决于onFulfilled（或onRejected）的执行结果
    return new MyPromise(
      (resolveT, rejectT) => {
        if (self.status === PENDING) {//如果是pending状态，现将成功和失败的回调存到数组中，一边settle之后再调用
          self.onFulfilledCallbacks.push(fulfilled);
          self.onRejectedCallbacks.push(rejected);
        } else if (self.status === FULFILLED) {
          fulfilled(self._value);
        } else if (self.status === REJECTED) {
          rejected(self._value);
        }

        //为实现then的链式调用，将onFulfilled包装，来改变promiseT的状态
        const fulfilled = val => {
          try {
            if (!isfunction(onFulfilled)) {
              resolveT(val); //如果当前的then没有对应结果的处理方法，则直接改变promiseT的状态，不执行onFufilled，若有下一个then直接跳过去，若无就结束
            } else {
              const res = onFulfilled(val);
              if (res instanceof MyPromise) {
                res.then(resolveT, rejectT);
                //如果成功回调也返回promise，则promiseT的结果需要和成功回调的promise的结果保持一致
                //resolveT 和 rejectT 是改变promiseT状态的函数
              } else {
                resolveT(res);//如果成功回调不返回promise，则promiseT状态为成功
              }
            }
          } catch (error) {
            rejectT(error);
          }
        }

        const rejected = reason => {
          try {
            if (!isfunction(onRejected)) {
              rejectT(reason);
            } else {
              const res = onRejected(reason);
              if (res instanceof MyPromise) {
                res.then(resolveT, rejectT);
              } else {
                resolveT(res);
              }
            }
          } catch (error) {
            rejectT(error);
          } 
        }
      }
    )
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(cb) {
    return this.then(
      value => MyPromise.resolve(cb).then(() => value),
      reason => MyPromise.resolve(cb).then(() => {throw reason})
    )
  }
  
  // 将给定的值转换为一个promise
  static resolve(val) {
    if (val instanceof MyPromise) return val;
    return new MyPromise(resolve => resolve(val));
  }
  // 返回一个已拒绝（rejected）的 Promise 对象
  static reject(val) {
    return new MyPromise((resolve, reject) => reject(val));
  }
  static all(list) {
    return new MyPromise((resolve, reject) => {
      let values = [];
      let count = 0;
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(res => {
          values[i] = res;
          count++;
          if (count === list.length) resolve(values);
        }, error => {
          reject(error);
        })
      }
    })
    
  }
  static race(list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(res => resolve(res), err => reject(err));
      }
    })
  }
}