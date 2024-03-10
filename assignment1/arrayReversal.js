// 9. Implement array reversal. dont use builtin function

let array=["Maths","science","social"]
let rev=[]
for(let i=array.length-1;i>=0;i--)
{
    rev.push(array[i])
}
console.log(rev)


// output
// [ 'social', 'science', 'Maths' ]