// Object.prototype.toString.call() 方法判断类型是准确可靠的吗？

//常规的
const obj = { a: 1, b: 2 };
console.log('常规的：',Object.prototype.toString.call(obj)); // [object Object]

//非常规的
Object.prototype[Symbol.toStringTag] = '我是假的';
console.log('非常规的：',Object.prototype.toString.call(obj)); // [object foo]