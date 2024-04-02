// Q2. Sum of All Subarrays

// Problem Description
// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.

// Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.
// Example Input
// Input 1:
// A = [1, 2, 3] Output :20
// Input 2:
// A = [2, 1, 3]  Output :19

function sumOfArray(arr) {
    let totalSum = 0;
    

    
    for (let l = 0; l < arr.length; l++) {
        let subarraySum = 0;
 
        for (let r = l; r < arr.length; r++) {
            for (let i = l; i <= r; i++) {
                subarraySum += arr[i];
            }
        }
        totalSum += subarraySum;
    }

    return totalSum;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 1, 3];

console.log(sumOfArray(arr1)) // Output: 20
console.log(sumOfArray(arr2))//output:19




