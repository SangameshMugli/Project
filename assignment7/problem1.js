// Q1. Max Sum Contiguous Subarray
// Find the maximum sum of contiguous non-empty subarray within an array A of length N.
// Example Input
// Input 1:
//  A = [1, 2, 3, 4, -10]                Output 1:10
// Input 2:
//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   Output 2:6


let arr= A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
let cumarr=[arr[0]]
for(let i=1;i<arr.length;i++)
{
    cumarr[i]= cumarr[i-1]+arr[i]
}



function maxsum(arr)
{
let maximum=Number.MIN_VALUE
for(l=0;l<arr.length;l++)
{
    for(r=l;r<arr.length;r++)
    {
        let sum=0
        if(l==0)
        {
            sum=cumarr[r]
        }
        else
        {
            sum=cumarr[r]-cumarr[l-1]
        }
        if(sum>maximum)
        {
            maximum=sum
        }
    }
}console.log(maximum)
}


maxsum(arr)//output:6