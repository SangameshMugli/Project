// 5. Declare an array and sum of all values in an array using loops - for, while  — Use functions

let array=[10,30,9,7,20,5]

function sum(arr)
{
    let add=0
    for(let i=0;i<arr.length;i++)
    {
        add=add+arr[i]
        
    }
    console.log(add)
}

function sum1(arr)
{
    let add1=0
    let x=0
    while(x<arr.length)
    {
        add1=add1+arr[x]
        x++
    }
    console.log(add1)

}

sum(array)
sum1(array)

// output

// 81-for loop
// 81-while loop