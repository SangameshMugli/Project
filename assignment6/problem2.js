// Q2. Even Subarrays
// You are given an integer array A.
// Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.
// Return "YES" if it is possible; otherwise, return "NO" (without quotes).

// Problem Constraints
// 1 <= |A|, A[i] <= 10^6

// Input Format
// The first and the only input argument is an integer array, A.

// Output Format
// Return a string "YES" or "NO" denoting the answer.

// Example Input
// Input 1:
//  A = [2, 4, 8, 6]     Output 1:"YES"
// Input 2:  
//  A = [2, 4, 8, 7, 6]    Output 2: "NO"


function EvenSubarrays(array) 
{
    
    let Even = false;


    for (let i = 0; i < array.length; i++) {
        
        if (array[i] % 2 === 0) 
        {
            Even = true;
        } else 
        {
            if (Even) 
            {
                return "NO";
            }
        }
    }
    if(Even)
    {
        return "YES"
    }
    else
    {
        return "NO"
    }
}

let  A1 = [2, 4, 8, 6];
let  A2 = [2, 4, 8, 7, 6];

console.log(EvenSubarrays(A1)); // Output: "YES"
console.log(EvenSubarrays(A2)); // Output: "NO"
