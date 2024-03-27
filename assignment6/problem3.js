// Q3. Leaders in an array



// Problem Description
// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.

// NOTE: The rightmost element is always a leader.


// Problem Constraints
// 1 <= N <= 10^5
// 1 <= A[i] <= 10^8


// Input Format
// There is a single input argument which a integer array A


// Output Format
// Return an integer array denoting all the leader elements of the array.


// Example Input
// Input 1:
//  A = [16, 17, 4, 3, 5, 2]
// Input 2:
//  A = [5, 4]

// Example Output
// Output 1:
// [17, 2, 5]
// Output 2:
// [5, 4]


function arrayleaders(array)
{
 let max=array[array.length -1]
 let leadersArray=[]
 leadersArray.push(max);
//  console.log(leadersArray);

 for(let i=array.length-2;i>=0;i--)
 {
    
    if(array[i]>max)
    {
        max=array[i]
        leadersArray.push(max)
    }
 }console.log(leadersArray); 
}

let a1=[16,17,4,3,5,2]
let a2=[5,4]
arrayleaders(a1)
arrayleaders(a2)