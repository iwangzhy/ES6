const arr = [1, 3, 5, 7, 9, 12, 24, 25, 352, 324, 3, 24, 3, 24, 3, 24, 3, 2];
// const result = arr.filter((item) => {
//   return item % 2 == 0;
// });
const result = arr.filter(item => item % 2 == 0);
console.log(result);

var name = 'windowName';
let obj = {
  name: 'wangzhy',
  getName1: function () {
    console.log('@@@', this);  // obj 对象
    return this.name;  // wangzhy
  },
  getName2: () => {
    console.log('@@@', this);  // window 对象
    return this.name;  // windowName
  }
}

obj.getName1();
obj.getName2();

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2)); // NaN

function add1(a, b, c = 0) {
  return a + b + c;
}

console.log(add1(1, 2, 3)); // 6
console.log(add1(1, 2)); // 3

function conn({hot = '127.0.0.1', username, password, prot}) {
  console.log(hot, username, password, prot);
}

conn({
  // hot: 'localhost',
  username: 'username',
  password: 'password',
  prot: 8080
});

console.log('=====================');

function date() {
  console.log(arguments);
}

date('aa', 'bb');

function date1(...args) {
  console.log(args);  // args 是一个数组，可以使用 filter、some、every、map 等方法
}

date1('aa', 'bb');

function date2(a, b, ...args) {
  console.log(a, b, args);
}

date2('aa', 'bb', 'cc', 'dd');

console.log('=====================');

const tfboys = ['a', 'b', 'c'];

function chunwan() {
  console.log(arguments);
}

chunwan(...tfboys);

const aa = ['a', 'b', 'c'];
const bb = ['aa', 'bb', 'cc'];
// 数组合并
const cc = [...aa, ...bb];
console.log(cc);

// 数组克隆
const dd = [...cc];
console.log(dd);

// 将伪数组转为真正的数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divs); // NodeList []
console.log(divArr); // []

console.log('=====================');

let s = Symbol();
console.log(s, typeof s);  // Symbol() 'symbol'

let s2 = Symbol('w'); // 描述字符串
let s3 = Symbol('w'); // 描述字符串
console.log(s2, typeof s2);  // Symbol(w) 'symbol'
console.log(s2 === s3);  // false
let s4 = Symbol.for('w');

let s5 = Symbol.for('w');
console.log(s4, typeof s4);  // Symbol(w) 'symbol'
console.log(s4 === s5);  // true

let game = {
  "name": "LOL",
  [Symbol("say")]: function () {
    console.log('say');
  }
};

let methods = {
  up: Symbol(),
  down: Symbol()
}

game[methods.up] = function () {
  console.log('up');
}
game[methods.down] = function () {
  console.log('down');
}

console.log(game);

class Persion {
  static [Symbol.hasInstance]() {
    console.log('我被用来检测类型了');
  }
}

let o = new Object();

console.log(o instanceof Persion);

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5, ['a', 'b', 'c']];

arr2[Symbol.isConcatSpreadable] = true;

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚'];

console.log(xiyou);

for (let v of xiyou) {
  console.log(v); // 唐僧,孙悟空,猪八戒,沙和尚
}
for (let v in xiyou) {
  console.log(v); // 0,1,2,3
}

let iterator = xiyou[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // done ： true

const banji = {
  "name": "一班",
  "students": ['a', 'b', 'c'],
  [Symbol.iterator]() {
    let self = this;
    let index = 0;
    return {
      next: function () {
        return {
          done: !(index < self.students.length),
          value: self.students[index++]
        }
      }
    };
  }
}

for (let v of banji) {
  console.log(v);
}

console.log('=====================');

function* gen() {
  console.log(111);
  yield 'yield 111';
  console.log(222);
  yield  'yield 222';
  console.log(333);
  yield  'yield 333';
  console.log("hello generator");
}

gen(); // 什么都不会输出
let g = gen();
g.next(); // 111
g.next(); // 222
g.next(); // 333
g.next(); // hello generator
g.next(); // 什么都不会输出
console.log('=====================');
for (let gg of gen()) {
  console.log(gg);
}
console.log('=====================');

function* gen2() {
  console.log(111);
  yield 'yield 111';
  console.log(222);
  yield  'yield 222';
  console.log(333);
  yield  'yield 333';
  console.log("hello generator");
}

let g2 = gen2();

console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

console.log('=====================');
// 回调地狱
// setTimeout(() => {
//   console.log('1111');
//   setTimeout(() => {
//     console.log('222');
//     setTimeout(() => {
//       console.log('3333');
//     }, 3000);
//   }, 2000);
// }, 1000);

//

function one() {
  setTimeout(() => {
    console.log('111');
    g3.next();
  }, 1000);
}

function two() {
  setTimeout(() => {
    console.log('222');
    g3.next();
  }, 2000);
}

function three() {
  setTimeout(() => {
    console.log('333');
    g3.next();
  }, 3000);
}

function* gen3() {
  yield one();
  yield two();
  yield three();
}

let g3 = gen3();
g3.next();

console.log('=====================');

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let data = 'success';
    // resolve
    // resolve(data);
    // reject
    reject('error');
  }, 1000);
});
// 调用  promise 的 then 方法

p.then(function (value) {
  console.log(value)
}, function (reason) {
  console.log(reason)
});

console.log('=====================');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users', true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(xhr.status);
  }
}

console.log('=====================');

const p1 = new Promise((resolve, reject) => {
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.status < 300 && xhr.status >= 200) {
      resolve(xhr.response);
    } else {
      reject(xhr.status);
    }
  }
});

p.then(function (value) {
  console.log(value)
}, function (reason) {
  console.log(reason)
});