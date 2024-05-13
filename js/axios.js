axios({
  url:'https://baidu.com',    // 设置请求的地址
  method:"GET", // 设置请求方法
  params:{      // get请求使用params进行参数凭借,如果是post请求用data
    type: '',
    page: 1
  }
}).then(res => {
  // res为后端返回的数据
  console.log(res);
})