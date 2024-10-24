function Fun(){
    console.log('this is fun');
    function Person (name,age) {
        this.name = name;
        this.age = age
    }
    Person.prototype.sayName = function (){
        console.log(this.name)
    }
    console.log(Object.prototype)
    const Person1 = new Person('xiaoming',18);
    console.log(Array.prototype.toString.call(Person1));
    console.log(typeof Array);
    // Person1.sayName()
    // console.log(Person.prototype)
    // console.log(Person1.__proto__)

    // console.log(Person.__proto__)
    // console.log(Function.prototype)
    // console.log('---------')
    // console.log(Function.prototype)
    // console.log(Function.__proto__.__proto__.__proto__)
    // console.log(Object.prototype.__proto__)
    // console.log(Object.__proto__)
    // console.log('---------')
    function Instanceof(obj,func){
        //obj必须是函数或者对象
        if(!(obj && ['function','object'].includes(typeof obj))){
            return false
        }
        const Prototype = func.prototype;
        const Proto = Object.getPrototypeOf(obj);
        if(Proto === Prototype){
            return true
        }else if(Proto === null){
            return false
        }else{
            return Instanceof(Proto,func)
        }
    }

    let Fn = function () { }
    let p1 = new Fn()
    console.log(Instanceof({}, Object)) // true
    console.log(Instanceof(p1, Fn)) // true
    console.log(Instanceof({}, Fn)) // false
    console.log(Instanceof(null, Fn)) // false
    console.log(Instanceof(1, Fn)) // false

}
Fun()