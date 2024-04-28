'use strict';

{
  let a = 100;
  var b = 1;
}

// console.log(a); // undefined
console.log(b); // 1

for (let i = 0; i < 10; i++) {
  // console.log(i);
}
// console.log(i); // i is not defined

for (var i = 0; i < 10; i++) {

}
console.log(i); // 10

var a = [];
for (let i = 0; i < 6; i++) {
  a[i] = function () {
    console.log(i);
  }
}
a[5](); // 5

console.log("=====================================");
// 下面的 2 个 i 不是同一个变量 （作用域不同）
for (let i = 0; i < 10; i++) { // 第一个 i
  let i = 'abc';  // 第二个 i
  console.log(i);
}
console.log("=====================================");
console.log("变量提升");

console.log(num);
var num = 100;

// console.log(num2); // Uncaught ReferenceError: Cannot access 'num2' before initialization
let num2 = 100;

console.log("=====================================");
console.log("暂时性死区");

var tmp = 123;
if (true) {
  // typeof tmp; // error
  // tmp = 'abc'; // 会提示 temp 未初始化
  let tmp;
  console.log(typeof tmp); // 'undefined'
  console.log(tmp); // undefined
  tmp = 234;
  console.log(tmp); // 234
  console.log(typeof tmp);// 'number'
}
console.log(tmp); // 123

console.log("=====================================");

function bar(x = y, y = 2) {
  return [x, y];
}

// 错误原因： 在执行 x=y 时，y 还没有声明
// bar(); // Uncaught ReferenceError: Cannot access 'y' before initialization

function bar1(y = 2, x = y) {
  return [x, y];
}

console.log(bar1()); // [2, 2]

console.log("=====================================");
console.log("不允许重复声明");

function func() {
  var a = 123;
  // let a = 123; // 报错
}

function func1() {
  let a = 123;
  // let a = 123; // 报错
}

console.log("=====================================");

function func3(arg) {
  // let arg; // 报错
}

function func4(arg) {
  { // 块级作用域
    let arg; // 不报错
  }
}

var date = new Date();

function f() {
  console.log(date); // undefined (变量提升)
  if (false) {
    var date = 'hello world';
  }
}

f();
console.log(date); // 输出日期

console.log("=====================================");
var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i);

console.log("=====================================");

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

f1();

console.log("=====================================");

if (true) {
  function f() {

  }
}

try {
  function f() {
  };
} catch (e) {

}

console.log("=====================================");

function f() {
  console.log("i am outside");
}

(function () {
  if (false) {
    function f() {
      console.log("i am inside");
    }
  }
  // f(); // f is not a function (报错)
}());
console.log("=====================================");
f = undefined;

{
  let a = 'secret';

  function f() {
    return a;
  }

  console.log(f()); // secret
}
// console.log(f()); // 'use strict' 模式下报错，非严格模式下输出 secret

console.log("=====================================");

f = undefined;

{
  let a = 'secret';
  let f = function () {
    return a;
  }

  console.log(f()); // secret
}

// console.log(f()); // undefined

// if(true) let x = 1; // 报错, 块级作用域需要加上大括号。
if (true) {
  let x = 1;
}

if (true) {
  function f() {
  } // 不报错
}

// if (true) function f() {} //报错
console.log("=====================================");
console.log("const 命令定义的对象是只读的");

const PI = 3.1415926;
console.log(PI);
// PI = 3; // 报错

// const foo; // 报错，使用 const 声明变量时必须赋值。

