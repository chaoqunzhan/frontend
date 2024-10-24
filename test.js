
const list = [0,0,0,12,23,4] 
function moveZeros(list) {
    // your code here
    const arr = [];
    const zero = [];
    for(let i=0; i<list.length; i++){
      if(list[i]==0){
        zero.push(list[i])
      }else{
        arr.push(list[i])
      }
    }
    return [...arr, ...zero]
  }
  console.log(moveZeros(list))