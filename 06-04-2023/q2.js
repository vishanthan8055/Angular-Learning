
arr = ['vichu','mohan','charu']

function filterThis(arr){
    result = []
    for(let x of arr)
        result.push(x.toUpperCase())
    return result
}
console.log(filterThis(arr))