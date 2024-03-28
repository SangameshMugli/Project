// Q3. Bulbs

// Problem Description
// A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

// You can press the same switch multiple times.

// Note: 0 represents the bulb is off and 1 represents the bulb is on.
// Problem Constraints
// 0 <= N <= 5×10^5
// 0 <= A[i] <= 1
// Example Input
// Input 1:
//  A = [0, 1, 0, 1]    Output 1:4
// Input 2:             
//  A = [1, 1, 1, 1]    Output 2:0



function bulb(array) 
{
    let switches = 0; // which is used to count how many times the switch is pressed
    let count = 0;  // 

    for (let i = 0; i < array.length; i++)
    {
        if ((array[i] + count) % 2 === 0) 
        {
            switches++;
            count = 1 - count;
        }
    }

    console.log(switches)
}
let array1=[0,1,0,1]
let array2=[1,1,1,1]
bulb(array1) // Output: 4
bulb(array2)// Output: 0

