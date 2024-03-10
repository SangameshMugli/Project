// 4. Declare an array and print all values in an array using loops - for, while — Use functions

let array=[1,5,10,20,15,7,2]

function printArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}

function printArray1(arr)
{
    let x=0
    while(x<arr.length)
    {
        console.log(arr[x]);
        x++
    }
}
printArray(array)
printArray1(array)

// output

// for loop
// 1
// 5
// 10
// 20
// 15
// 7
// 2

// while loop
// 1
// 5
// 10
// 20
// 15
// 7
// 2