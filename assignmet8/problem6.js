// How do you reverse an array?

let array=[1,2,3,4]
let array2=["hello" ,"world"]

function reversearray(arr)
{
    let reverse=[]
    for(let i=arr.length-1;i>=0;i--)
    {
        reverse.push(arr[i])

    }console.log(reverse);

}

reversearray(array)//output:[ 4, 3, 2, 1 ]

reversearray(array2)//output:[ 'world', 'hello' ]