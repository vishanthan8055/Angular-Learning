arr = ["vichu","vi","ch"]
longest = (arr)=>{
    sum = 0
    for(let x in arr){
        sum = sum + arr[x].length
    }
    return sum
}
console.log(longest(arr))