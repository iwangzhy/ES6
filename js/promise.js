let p = new Promise((resolve, reject) => {
  reject("请求失败！");
});
console.log(p);
p.then(result => {
  console.log('result:', result);
}).catch(error => {
  console.log('error:', error);
}).finally(() => {
  console.log('finally done!');
});

