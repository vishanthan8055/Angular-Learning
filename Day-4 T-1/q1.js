function filterThis(arrayFilter,array){
    result = []
    for(let x of array)
        if(arrayFilter(x))
            result.push(x)
    return result
}
numbers = [1,3,5,7,9]
fresult = filterThis(function(x){
    if(x < 3){
        return true;
    }
    for(let i=2;i*i<=x;i++){
        if(x%i == 0){
            return false
        }
    }
    return true
},numbers)
console.log(fresult)