function Fun(){
    //判断是否是Object
    const isObject = (value)=>{
        return (typeof value === 'object') && value !== null
    } 
    function deepClone(obj){
        if(!isObject(obj)) return obj;
        let objClone = obj instanceof Array ? [] : {};
        if(obj instanceof Array){
            obj.forEach((item)=>{
                objClone.push(isObject(item) ? deepClone(item) : item)
            })
        }else{
            Object.keys(obj).forEach(key=>{
                objClone[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
            })
        }
        return objClone
    }
 
    let testObj = {
        a:'s',
        b:{
            ww:2,
            ss:23
        }
    };
    let testObjClone = deepClone(testObj);
    testObjClone.a = 'kkkk';
    console.log(testObj,'testObj1');
    console.log(testObjClone,'testObjClone1');

    let testArray = [12,323,{
        a:2232
    }];
    let testArrayClone = deepClone(testArray);
    testArrayClone[2].a = 'kkkk';
    console.log(testArray,'testArray');
    console.log(testArrayClone,'testArrayClone');
}