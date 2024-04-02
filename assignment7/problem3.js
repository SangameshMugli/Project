// Q3. Subarray with least average


// Problem Description
// Given an array of size N, find the subarray of size K with the least average.

// Example Input
// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3                                  Output :3
// Input 2:
// A=[3, 7, 5, 20, -10, 0, 12]
// B=2                                Output :4

function leastaverage(arr,k)
{
    let minAvg=Number.MAX_VALUE
    let minindex=-1

    for (let l = 0; l <= arr.length - k; l++) {
        let subarraySum = 0

        for (let r = l; r < l + k; r++) {
            subarraySum += arr[r]
        }

        let avg = subarraySum / k

        if (avg < minAvg) {
            minAvg = avg
            minindex = l
        }
    }

    return minindex
}
let a1=[3, 7, 90, 20, 10, 50, 40]
let b1=3

let a2=[3, 7, 5, 20, -10, 0, 12]
let b2=2

console.log(leastaverage(a1,b1))//output:3
console.log(leastaverage(a2,b2))//output:4


