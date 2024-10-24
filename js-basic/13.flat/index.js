function flat(arr, depth = 1) {
    // your imeplementation here
    const complate = depth === 0 || arr.every(item => !(item instanceof Array));
    if (complate) return arr;
    let res = [];
    arr.forEach(item => {
        if (item instanceof Array) {
            res.push(...item)
        } else {
            res.push(item)
        }
    })
    return flat(res, depth - 1)
}
const arr = [1, [2], [3, [4]]];

console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity))
// const arr = [1, [2], [3, [4]]];

// flat(arr)
// [1, 2, 3, [4]]

// flat(arr, 1)
// [1, 2, 3, [4]]

// flat(arr, 2)
// [1, 2, 3, 4]