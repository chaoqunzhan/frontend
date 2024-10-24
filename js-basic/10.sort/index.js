//quick sort
function quickSort(array){
    if(array.length <= 1) return array;
    let [centerItem] = array.splice(array.length/2,1);
    let leftArray = [];
    let rightArray = [];
    array.forEach(item=>{
        if(item <= centerItem){
            leftArray.push(item)
        }else{
            rightArray.push(item)
        }
    })
    return [...quickSort(leftArray),centerItem,...quickSort(rightArray)]
}

//


let array = [2,3,21,12,3,23,12,44];
console.log(quickSort(array))
