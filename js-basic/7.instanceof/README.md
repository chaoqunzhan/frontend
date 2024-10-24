//https://juejin.cn/post/7075852383250546718
https://github.com/qianlongo/fe-handwriting
prototype:显式原型
__proto__:隐式原型
constructor:构造函数

实例的__proto__和构造函数的prototype一样

Object是Function的实例
Function是Function的实例

原型链其实就是__proto__链
instanceof 主要的作用就是判断一个实例是否属于某种类型
实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可


判断js数据类型

1、typeOf
2、instancdOf
3、Object.prototype.toString.call()