// Q2. Good Subarrays Easy

// Problem Description
// Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
// 1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
// 2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
// Your task is to find the count of good subarrays in A.
// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = 4                                               Output :6
// Input 2:
// A = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
// B = 65                                              Output :36



function countGoodSubarrays(A, B) {
    let count = 0

    function calculateSum(subarray) {
        let sum = 0
        for (let i = 0; i < subarray.length; i++) {
            sum += subarray[i]
        }
        return sum;
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let subarray = []
            
            for (let k = i; k <= j; k++) {
                subarray.push(A[k]);
            }

            let sum = calculateSum(subarray);

            if ((subarray.length % 2 === 0 && sum < B) ||
                (subarray.length % 2 !== 0 && sum > B)) {
                count++ 
            }
        }
    }

    return count
}

const A1 = [1, 2, 3, 4, 5];
const B1 = 4
console.log(countGoodSubarrays(A1, B1)) // Output: 6

const A2 = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
const B2 = 65
console.log(countGoodSubarrays(A2, B2)) // Output: 36


