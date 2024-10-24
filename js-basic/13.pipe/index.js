
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y


function pipe(funcs) {
	// your code here
	return x => funcs.reduce((y,fn)=>fn(y),x)
}

pipe([
  times(2),
  plus(3)
])