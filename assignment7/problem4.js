// Q4. Maximum Subarray Easy
// Problem Description
// You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
// But the sum must not exceed B.
// Example Input
// Input 1:
// A = 5
// B = 12
// C = [2, 1, 3, 4, 5]          Output :12
// Input 2:
// A = 3
// B = 1
// C = [2, 2, 2]              Output :0


function maxsum(A,B,C)
{
    let maxsum=0

    for(let i=0;i<A;i++)
    {
        for(let j=i;j<A;j++)
        {
            let sum=0
            for(let k=i;k<=j;k++)
            {
                sum+=C[k]
            }
            if(sum<=B && sum>maxsum)
            {
                maxsum=sum
            }

        }
    }
    return maxsum

}

let A1 = 5
let B1 = 12
let C1 = [2, 1, 3, 4, 5]

let A2 = 3
let B2 = 1
let C2 = [2, 2, 2]

console.log(maxsum(A1,B1,C1))//output:12
console.log(maxsum(A2,B2,C2))//output:0