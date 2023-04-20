arr = [
    {name:"Vichu",marks:469},
    {name:"charu",marks:435},
    {name:"mohan",marks:321},
    {name:"anjali",marks:499},
    {name:"vicky",marks:288},
    {name:"vamsi",marks:269},
]
function filterThis(arrayFilter,arr){
    result = []
    for(let x of arr)
        if(arrayFilter(x))
            result.push(x)
    return result
}
fresult = filterThis(function(x){
        if(((x.marks/500)*100) >=70){
            return true
        }
},arr)
console.log(fresult)