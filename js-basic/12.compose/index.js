/**
         * 将需要嵌套执行的函数平铺
         * 例：fn2(fn1(0)) === compose(fn2,fn1)(0);  //从右往左
         * 
         * 例：fn2(fn1(0)) === pipe(fn1,fn2)(0);    //从左往右
        */
            
        const fn1 = x => x + 10;
        const fn2 = x => x * 10;
        const fn3 = x => x + 1;
        let res = fn3(fn2(fn1(0)));
        console.log(res);

        const compose = (...fn)=>{
            return fn.reduceRight((prev,curr)=>{
                return (...arg) => curr(prev(...arg))
            })
        }
        res = compose(fn1,fn2,fn3)(0);
        console.log('compose:',res);

        const pipe = (...fn)=>{
            return fn.reduce((prev,curr)=>{
                return (...arg) => curr(prev(...arg))
            })
        }
        res = pipe(fn1,fn2,fn3)(0);
        console.log('pipe:',res);