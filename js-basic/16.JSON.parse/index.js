console.log(parse('{}'));       // {}
    console.log(parse('true'));     // true
    console.log(parse('"foo"'));    // "foo"
    console.log(parse('[1, 5, "false"]'));      // [1, 5, "false"]
    console.log(parse('null'));     // null
    console.log(parse('{"a":b}'));     // null
    console.log(parse('[{"a":{"b":{"c":[1]}}},null,"str"]'))   //[{a:{b:{c:[1]}}},null,"str"]

    function parse(str) {
        if (str === '') throw Error();
        if (str[0] === "'") throw Error();
        if (str === 'false') return false;
        if (str === 'true') return true;
        if (str === '{}') return {};
        if (str === '[]') return [];
        if (str === 'null') return null;
        if (!isNaN(str)) return Number(str)
        if (str[0] === '"') return str;
        if (str[0] === '{') {
            const obj = {};
            const ObjArr = str.slice(1, -1).split(',');
            ObjArr.forEach(item => {
                const index = item.indexOf(':');
                const key = item.slice(0, index)
                const value = item.slice(index + 1);
                obj[key.slice(1,-1)] = parse(value);
            })
            return obj;
        }
        if (str[0] === '[') return str.slice(1, -1).split(',').map(item => item.trim());
        return str
    }