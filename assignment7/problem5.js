// Q1. Counting Subarrays Easy

// Problem Description
// Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.
 


// Example Input
// Input 1:
//  A = [2, 5, 6]
//  B = 10                           Output:4
// Input 2:
//  A = [1, 11, 2, 3, 15]
//  B = 10                             Output:4



function maxsubarray(A,B)
{
    let maxsum=0
    let count=0

    for(let i=0;i<A.length;i++)
    {
        for(let j=i;j<A.length;j++)
        {
            let sum=0
            for(let k=i;k<=j;k++)
            {
                sum+=A[k]
            }
            if(sum<B && sum>maxsum)
            {
                
                count++
            }

        }
    }
    return count
}
let  A1 = [2, 5, 6]
let  B1= 10

let A2= [1, 11, 2, 3, 15]
let B2= 10 

console.log(maxsubarray(A1,B1)) // output:4
console.log(maxsubarray(A2,B2));// output:4