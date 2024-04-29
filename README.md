# ES6

ES6 语法学习

教程地址： https://es6.ruanyifeng.com/

## let

## const

## Promise

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


