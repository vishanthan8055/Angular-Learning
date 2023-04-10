
arr = [
    {name:"Vichu",marks:469},
    {name:"charu",marks:435},
    {name:"mohan",marks:321},
    {name:"anjali",marks:499},
    {name:"vicky",marks:488},
    {name:"vamsi",marks:269},
]
max = 0
stu = "cc"
for(let x of arr){
    if(x.marks > max){
        max = x.marks;
        stu = x.name;
    }
}
console.log(stu)

