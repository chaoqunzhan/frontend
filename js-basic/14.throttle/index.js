/**
     * @param {(...args:any[]) => any} func
     * @param {number} wait
     * @returns {(...args:any[]) => any}
     */
    //如果在冷却时间内就保留参数，冷却时间结束没有下一次触发就执行保留的参数事件，否则执行下次触发
    function throttle(func, wait) {
        // your code here
        let waitting = false; let lastArgs = null;
        return (...args) => {
            if (!waitting) {
                waitting = true;
                setTimeout(() => {
                    waitting = false;
                    if (lastArgs) return func(...lastArgs);
                }, wait)
                return func(...args);
            } else {
                lastArgs = args
            }
        }
    }
    const fn = () => {
        console.log(1)
    }
    const fnThrottle = throttle(fn, 3000)