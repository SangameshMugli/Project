// Q3. Time to equality

// Problem Description
// Given an integer array A of size N. In one second, you can increase the value of one element by 1.

// Find the minimum time in seconds to make all elements of the array equal.


// Problem Constraints
// 1 <= N <= 1000000
// 1 <= A[i] <= 1000


// Input Format
// First argument is an integer array A.


// Output Format
// Return an integer denoting the minimum time to make all elements equal.


// Example Input
// A = [2, 4, 1, 3, 2]


// Example Output
// 8


function minTimeToEquality(arr) 
{
    
    let maxElement = -Infinity;
    for (let i = 0; i < arr.length; i++) 
    { 
        if (arr[i] > maxElement)              // Find the maximum element in the array
        {
            maxElement = arr[i];
        }
    }
    
   
    let totalTime = 0;
    for (let i = 0; i < arr.length; i++) 
    {  
        totalTime += maxElement - arr[i];    // Calculate the total time required
    }
    
    return totalTime;
}


console.log(minTimeToEquality([2, 4, 1, 3, 2])); // Output: 8

