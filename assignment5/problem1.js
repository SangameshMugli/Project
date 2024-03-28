// Q1. Special Subsequences "AG"
// Problem Description
// You have given a string A having Uppercase English letters.
// You have to find how many times subsequence "AG" is there in the given string.
// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

// Problem Constraints
// 1 <= length(A) <= 10^5

// Example Input
// Input 1:

//  A = "ABCGAG"    output 3
// Input 2:

//  A = "GAB"   output 0

            

function AGSubsequences(string) {
    let count = 0;


    for(let i=0;i<string.length;i++)
    {
        if(string[i]=='A'){
            for(let j=i+1;j<string.length;j++)
            {
                if(string[j]=='G')
                {
                    count++

                }
            }
        }
    }return count
}


let string = "ABCGAG";
let string2="GAB"

console.log(AGSubsequences(string)); // Output : 3
console.log(AGSubsequences(string2));// output : 0






