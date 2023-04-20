arr = ["vishanthan","vichu",'mohanasundaram']
longest = (arr)=>{
    max = 0
    mi = 0;
    for(let x in arr){
        if(arr[x].length > max){
            max = arr[x].length
            mi = x;
        }
    }
    return mi
}
console.log(longest(arr))