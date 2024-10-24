function func() {

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise1');
        }, 500)
    });

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise2')
        }, 1000)
    });


    /** 1.Promose.all
     *      a.接收一个Promise数组，如果是非Promise就当做成功
     *      b.所有的Promise都成功，就以数组的形式返回所有的结果
     *      c.有失败的就返回失败的结果
     * */
    function myAll(promiseList) {
        const result = [];
        return new Promise((resolve, reject) => {
            promiseList.forEach((ele, index) => {
                if (ele instanceof Promise) {
                    ele.then(res => {
                        result[index] = res;
                        if (index === promiseList.length - 1) resolve(result);
                    }, err => reject(err))
                } else {
                    result[index] = ele;
                    if (index === promiseList.length - 1) resolve(result);
                }
            });
        })
    }
    // demo
    // myAll(['ssss',promise1,promise2]).then(res=>{
    //     console.log(res)    // ['ssss', 'promise1', 'promise2']
    // })



    /** 2.Promose.race
     *      a.接收一个Promise数组，如果是非Promise就当做成功
     *      b.返回最快的Promise,无论成功失败
     * */
    function myRace(promiseList) {
        return new Promise((resolve, reject) => {
            promiseList.forEach(ele => {
                if (ele instanceof Promise) {
                    ele.then(res => {
                        resolve(res)
                    }, err => {
                        reject(err)
                    })
                } else {
                    resolve(ele)
                }
            })
        })
    }
    // demo
    // myRace([promise1, promise2]).then(res => {
    //     console.log(res)    // ['ssss', 'promise1', 'promise2']
    // })


    /** 3.Promose.allSettled
    *      a.接收一个Promise数组，如果是非Promise就当做成功
    *      b.返回一个数组，数组包含所有Promise的结果对象
    *      c.结果对象包含{status:'fulfilled',value:''} || {status:'rejected',reason:''}
    * */
    function myAllSettled(promiseList) {
        const result = [];
        return new Promise((resolve, reject) => {
            promiseList.forEach((ele, index) => {
                if (ele instanceof Promise) {
                    ele.then(res => {
                        result[index] = {
                            status: 'fulfilled',
                            value: res
                        }
                        if (index === promiseList.length - 1) resolve(result);
                    }, err => {
                        result[index] = {
                            status: 'rejected',
                            reason: err
                        }
                        if (index === promiseList.length - 1) resolve(result);
                    })
                } else {
                    result[index] = {
                        status: 'fulfilled',
                        value: ele
                    }
                    if (index === promiseList.length - 1) resolve(result);
                }
            })
        })
    }
    // demo
    // myAllSettled([promise1, promise2]).then(res => {
    //     console.log(res)    // [{status: 'rejected', reason: 'promise1'},{status: 'fulfilled', value: 'promise2'}]
    // })


    /** 4.Promose.any
    *      a.接收一个Promise数组，如果是非Promise就当做成功
    *      b.如果有个成功就返回这个成功
    *      c.如果都失败就返回报错
    * */
    function myAny(promiseList) {
        return new Promise((resolve, reject) => {
            promiseList.forEach((ele, index) => {
                if (ele instanceof Promise) {
                    ele.then(res => {
                        resolve(res)
                    }, () => {
                        if (index === promiseList.length - 1) throw new Error('All promises were rejected')
                    })
                } else {
                    resolve(ele)
                }
            })
        })
    }
    // demo
    // myAny([promise1, promise2]).then(res => {
    //     console.log(res)   
    // })



    /** 5.Promose.finally
    *      a.接收一个回调函数
    *      b.无论失败成功都会执行回调
    * */
    Promise.prototype.MyFinally = function (cb){
        return this.then(res=>{
            cb();
            return res;
        },err=>{
            cb();
            throw err;
        })
    }
    //demo
    // promise1.finally(()=>{
    //     console.log('finally')
    // })

}