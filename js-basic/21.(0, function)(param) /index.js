

(function () {
  (0, eval)("var foo = 123");
})();
console.log(foo); // 123

(function () {
  eval("var bar = 123");
})();
console.log(bar); //ReferenceError: bar is not defined

var obj = {
  method: function () {
    return this;
  },
};
console.log(obj.method() === obj); // true
console.log((0, obj.method)() === obj); // false
