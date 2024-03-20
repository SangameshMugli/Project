
// Q1:  equilibrium
// Problem Description
// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

// Note:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

// constraints:

// 1 <= N <= 10^5
// -10^5 <= A[i] <= 10^5



function equilibriumIndex(arr) 
{
    let totalSum = 0;          // Calculate the total sum of the array
    for (let i = 0; i < arr.length; i++) 
    {
        totalSum += arr[i];
    }
    
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        let rightSum = 0;            // Calculate the right sum
        for (let j = i + 1; j < arr.length; j++)
        {
            rightSum += arr[j];
        }
        
        if (leftSum === rightSum)    // Check if the current index is an equilibrium index
        {
            return i; // Found equilibrium index
        }
        
        leftSum += arr[i];    // Update the left sum for the next iteration
    }
    return -1;     // If no equilibrium index found
}


console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])); // Output: 3
console.log(equilibriumIndex([1, 2, 3])); // Output: -1
