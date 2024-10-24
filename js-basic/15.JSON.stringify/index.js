// Object.keys, Object.values, Object.entries与for in 的区别
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    /**
     * @param {any} data
     * @return {string}
     */
    /**
     * JSON.stringify()是用于将JS对象或者值转化为JSON字符串的方法
     * JSON.stringify(value, replacer, space)
     * value:要被转化的值，
     * replacer: 
     *  数组：数组中的值才被转化
     *  函数：value的元素都经过此函数操作
     * space：指定缩紧
    */
    function stringify(data) {
        return doStringify(data)
    }
    function doStringify(data, isArray = false) {
        const valueType = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
        // 1、对于BigInt类型，不支持序列化
        if (valueType === 'bigint') {
            throw new Error('error')
        }
        // 2、布尔、数字、字符串、null转化为字符串
        if (valueType === 'boolean') return value.toString();
        if (valueType === 'number') return value.toString();
        if (valueType === 'null') return value.toString();
        if (valueType === 'string') return `"${value.toString()}"`;
        // 3、undefined、函数、Symbol在数组中转化为null,在非数组中转化为undefined
        if (['undefined', 'function', 'Symbol'].includes(valueType) && isArray) return 'null';
        if (['undefined', 'function', 'Symbol'].includes(valueType) && !isArray) return undefined;
        // 4、如果对象存在toJSON()方法就直接使用toJSON()转化
        if (valueType === 'date') return value.toJSON();
        //对于数组的处理
        if (valueType === 'array') {
            const res = value.map(item => stringify(item, true));
            return `[${res.join(',')}]`
        }
        //对于object,map的处理
        if (valueType === 'object' || valueType === 'map') {
            const res = [];
            Object.keys(value).forEach(key => {
                if (value[key] !== undefined) res.push(`"${key}":${stringify(value[key])}`)
            })
            return `${res.join(',')}`
        }
    }