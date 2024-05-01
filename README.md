# ES6

ES6 语法学习

教程地址： https://es6.ruanyifeng.com/

## let

## const

## Promise

三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败) 

> Promise 的状态一旦改变，就永久保持该状态.

**Promise 新建后会立即执行。**

```javascript
// promise 会立即执行
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

// 等到 promise 执行 resolve 方法才会执行
promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');
// 输出结果：
// Promise
// Hi!
// resolved.
```

**Promise.then 与 Promise.catch**

```javascript
const promise = new Promise(function (resolve, reject) {
  reject("reject");
});

// 写法一； 给 Promise.then 传递两个参数（resolved方法、reject方法）
promise.then(function (value) {
  console.log(value);
}).catch(function (error) {
  console.log("@@@@", error);
})
// 写法二： Promise.then 一个参数（resolved方法），Promise.catch 一个参数(reject方法)
promise.then(function (value) {
  console.log(value);
}, function (error) {
  console.log("@@@@", error);
})
```

## Object

**`Object.defineProperty`**

语法：

```
Object.defineProperty(obj, prop, descriptor)
```

- obj 对象
- prop 属性名
- descriptor 目标属性所拥有的特性
  - value
  - writable 是否可以被重复写
  - enumerable 是否可以被枚举 （for..in 、 Object.keys()）
  - configurable 是否可以被删除或者修改特性 **默认为false**
  - getter、setter **使用了 getter、setter方法后，就不允许使用 writable、value 属性**  


