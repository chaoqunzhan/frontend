/**
 * new 的执行过程
 * 1. 创建一个对象obj
 * 2. 该对象的__proto__指向构造函数Fn的原型prototype
 * 3. 执行构造函数Fn的代码，往新创建的对象obj上添加成员属性和方法
 * 4. 返回这个新的对象obj，或者构造函数的返回值（object/function）
 */
const _new = function (func, ...args) {
    if (typeof func !== 'function') {
        throw 'func must be a function'
    }
    const obj = {};
    // let obj = Object.create(func.prototype)   直接使用Object.create更方便
    Object.setPrototypeOf(obj, func.prototype)
    Object.getPrototypeOf(obj).constructor = func;
    let result = func.apply(obj, args)
    if (typeof result === 'object' && result !== null || typeof result === 'function') {
        return result
    } else {
        return obj
    }
}

const Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.sayHello = () => {
    console.log('hello!')
}
const sam = _new(Person, 'sam', 21);
sam.sayHello()
const tom = new Person('tom', 21);
tom.sayHello()