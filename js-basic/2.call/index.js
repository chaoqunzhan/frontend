// this 为调用的函数
// context 是参数对象
Function.prototype._Call = function (context) {
    // 判断调用者是否为函数
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    console.log(context, 'context')
    // 不传参默认为 window
    context = context || window
    // 新增 fn 属性,将值设置为需要调用的函数
    context.fn = this
    // 将 arguments 转化为数组将 call 的传参提取出来 [...arguments]
    console.log(arguments, 'arguments')
    const args = Array.from(arguments).slice(1)
    // 传参调用函数
    console.log(this, 'this')
    const result = context.fn(...args)
    // 删除函数
    delete context.fn
    // 返回执行结果
    return result;
}
// 普通函数
function test(age, age1) {
    console.log(this.name + " " + age + " " + age1);
}
// 自定义对象
var obj = {
    name: 'PJ'
}
// 调用函数的 _Call 方法
test._Call(obj, 22)

//apply
test.apply(obj, [22])

Function.prototype._apply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = Array.from(arguments).slice(1)
    const result = context.fn(...args.flat(1))
    delete context.fn
    return result;
}

test._apply(obj, [22])



//bind
let fun = test.bind(obj)
fun(22);

Function.prototype._bind = function (context) {
    let self = this;
    let arg = Array.from(arguments).slice(1);
    return function () {
        let newArg = Array.from(arguments);
        console.log(newArg)
        return self.apply(context, arg.concat(newArg))
    }
}
// let funBind = test._bind(obj)
// funBind(22);

test._bind(obj, 21)(22)