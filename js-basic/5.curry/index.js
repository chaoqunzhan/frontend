const curry = (func, ...args) => {
    const funcLength = func.length;   //获取函数形参的个数
    const argments = args;   //获取curry函数的参数
    return function (...innerArgs) {
        //innerArgs是add函数的参数,相当于用innerArgs判断是否完成所有调用
        innerArgs = args.concat(innerArgs);
        if (innerArgs.length < funcLength) {
            return curry(func, ...innerArgs)
        } else {
            func.apply(this, innerArgs)
        }
    }
}
const add = curry((a, b, c) => {
    console.log(a, b, c)
})
add(1, 2)(3);
add(1, 2, 3);
add(1)(2)(3);
add(1)(2, 3);


function curry(fn) {
    // your code here
    return function myCurry(...args) {
        
        if (args.length>=fn.length) {
            return fn(...args)
        } else {
            return (...args2) => {
                return myCurry(...args,...args2)
            };
        }
    }
}
curry.placeholder = Symbol();

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here
    return function myCurry(...args) {
        let complate = args.length >= fn.length && args.slice(0, fn.length - 1).every(ele => ele !== curry.placeholder);
        if (complate) {
            return fn(...args)
        } else {
            return (...args2) => {
                const args22 = args2;
                let curryArgs = args.map(ele => {
                    if (ele === curry.placeholder && args22.length > 0) {
                        return args22.shift()
                    } else {
                        return ele
                    }
                });
                if (args22.length > 0) {
                    curryArgs.push(...args22)
                }
                return myCurry(...curryArgs)
            };
        }
    }
}
curry.placeholder = Symbol();