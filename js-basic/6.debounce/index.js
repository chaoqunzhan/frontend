

// 函数防抖debounce
function debounce(foo, wait) {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(()=>{
      foo.call(this, ...arg)
    }, wait)
  }
}
//验证
const func = (e) => console.log(e);
// 没有防抖
const input = document.getElementById('input');
input.addEventListener('input',func)
// 有防抖
const input1 = document.getElementById('input1');
input1.addEventListener('input',debounce(func,1000));