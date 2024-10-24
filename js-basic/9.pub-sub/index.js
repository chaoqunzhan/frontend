class PubSub {
    constructor(){
        this.event = {}
    }
    //添加订阅
    sub(event,callback){
        if(this.event[event]){
            this.event[event].push(callback)
        }else{
            this.event[event] = [callback]
        }
    }
    //发布，通知订阅           
    pub(event, ...args){
        const subEvents = this.event[event];
        if(subEvents?.length>0){
            subEvents.forEach(cb=>{
                cb.call(this,...args)
            })
        }
    }
    //删除某个订阅
    unSub(event,callback){
        const subEvents = this.event[event];
        if(subEvents?.length>0){
            this.event[event] = subEvents.filter(cb=>{
                return cb!==callback
            })
        }
    }
    //单次订阅
    onceSub(event,callback){
        const once = (...arg)=>{
            callback(...arg);
            //取消订阅
            this.unSub(event,once)
        }
        this.sub(event,once)
    }
}

//example
const pubSub = new PubSub();

const fun1 = ()=>{
    setTimeout(()=>{
        console.log('fun1');
        pubSub.pub('fun2','2');
        pubSub.pub('fun3','3');
    },1000);
    setTimeout(()=>{
        console.log('fun1');
        pubSub.pub('fun2','2');
        pubSub.pub('fun3','3');
    },2000)
}
const fun2 = (e)=>{
    console.log('fun2',e)
}
const fun3 = ()=>{
    console.log('fun3')
}
pubSub.sub('fun2',fun2);
pubSub.onceSub('fun3',fun3);
fun1()