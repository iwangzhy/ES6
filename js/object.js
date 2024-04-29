let person = {
  name: 'wangzhy',
  sex: '男'
};

Object.defineProperty(person, 'age', {
  value: 18
});

console.log(person); // person.age 不可被遍历

for (let personKey in person) {
  console.log(personKey, person[personKey]); // 只会输出 name、sex
}

console.log("==================================");

var obj = {
  test: "hello"
}
//对象已有的属性添加特性描述
Object.defineProperty(obj, "test", {
  value: 'hhhhh',
  writable: false // test 属性不允许被修改
});
obj.test = 1;
console.log(obj.test); // hhhhh

console.log("==================================");

Object.defineProperty(obj, "enum", {
  value: 'enum',
  enumerable: false // 不允许被枚举
});
obj.test = 1;
console.log(Object.keys(obj)); // ['test']

Object.defineProperty(obj, "enum1", {
  value: 'enum1',
  enumerable: true // 允许被枚举
});
obj.test = 1;
console.log(Object.keys(obj)); // ['test', 'enum1']

console.log("==================================");

Object.defineProperty(obj, "config", {
  value: 'config',
  configurable: true // 不允许被删除或修改
});

Object.defineProperty(obj, "config", {
  value: 'config1',
});
// {test: 'hhhhh', enum1: 'enum1', enum: 'enum', config: 'config1'}
console.log(obj);

console.log("==================================");

Object.defineProperty(obj, "get", {
  get() {
    return "get" + Date.now();
  },
  set(value){
    console.log('set', value);
  }
});

console.log(obj.get); // get1714362904746
console.log(obj);

obj.get = '123';

console.log("==================================");