// let p = new Promise((resolve, reject) => {
//   reject("请求失败！");
// });
// console.log(p);
// p.then(result => {
//   console.log('result:', result);
// }).catch(error => {
//   console.log('error:', error);
// }).finally(() => {
//   console.log('finally done!');
// });
// console.log("======================");
//
// // promise 会立即执行
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });
//
// // 等到 promise 执行 resolve 方法才会执行
// promise.then(function() {
//   console.log('resolved.');
// });
//
// console.log('Hi!');
// // 输出结果：
// // Promise
// // Hi!
// // resolved.
// console.log("======================");
//
// function loadImageAsync(url) {
//   return new Promise(function (resolve, reject) {
//     const image = new Image();
//
//     image.onload = function () {
//       resolve(image);
//     };
//
//     image.onerror = function () {
//       reject(new Error('Could not load image at ' + url));
//     };
//
//     image.src = url;
//   });
// }
//
// loadImageAsync(
//     "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")
// .then(function (value) {
//   console.log(value);
// });

// console.log("======================");
// const getJSON = function (url) {
//   const promise = new Promise(function (resolve, reject) {
//     const handler = function () {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();
//   });
//   return promise;
// };
//
// getJSON("/posts.json").then(function (json) {
//   console.log('Contents: ' + JSON.stringify(json));
// }, function (error) {
//   console.error('出错了', error);
// });
// console.log("======================");
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//   // p1 的状态会传递给 p2 ,即会执行 p2.catch(...) 方法
//   setTimeout(() => resolve(p1), 1000)
// })
//
// p2
// .then(result => console.log("p2", result))
// .catch(error => console.log("p2", error));  // 这个方法会"后"被执行
//
// p1.then(result => console.log("p1", result))
// .catch(error => console.log("p1", error)); // 这个方法会"先"被执行
//
// console.log("======================");
// const promise = new Promise(function (resolve, reject) {
//   reject("reject");
// })
// let promise1 = promise.then(function (value) {
//   console.log(value);
// });
// console.log("promise1", promise1, promise === promise1);
// promise1.then(function(error){
//   console.log("@@@@",error);
// })
//
// promise.then(function (value) {
//   console.log(value);
// }).catch(function (error) {
//   console.log("@@@@", error);
// })
//
// promise.then(function (value) {
//   console.log(value);
// }, function (error) {
//   console.log("@@@@", error);
// });

console.log("======================");
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`已收到响应：${response.status}`);
});

console.log("已发送请求……");