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

## axios 

下载 axios

```
npm i axios
```

axios 基于 XMLHttpRequest 支持 Promise。

单个请求：

```
axios('http://localhost:3000/data', {
  // 配置代码
  method: 'GET',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'xxx',
  },
  transformRequest: [function (data, headers) {
    return data;
  }],
  // 其他请求配置...
})
.then((data) => {
  // todo: 真正业务逻辑代码
  console.log(data);
}, (err) => {
  // 错误处理代码  
  if (err.response.status === 401) {
  // handle authorization error
  }
  if (err.response.status === 403) {
  // handle server forbidden error
  }
  // 其他错误处理.....
  console.log(err);
});
```

并发发送请求
```
function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (res1, res2) { 
    // res1第一个请求的返回的内容，res2第二个请求返回的内容
    // 两个请求都执行完成才会执行
}));
```



## Proxy

> Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

创建一个 Proxy 对象。

```
var proxy = new Proxy(target, handler);
```