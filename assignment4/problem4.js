// Q4. Product array puzzle

// Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

// Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


// Input Format

// The only argument given is the integer array A.
// Output Format

// Return the product array.
// Constraints

// 2 <= length of the array <= 1000
// 1 <= A[i] <= 10


function Puzzle(arr){
    
    let leftProduct=[];
    let rightProduct=[];
    let productArray=new Array(arr.length);



    for(let i=0;i<arr.length;i++){
         leftProduct[0]=1;
        leftProduct[i]=leftProduct[i-1]*arr[i-1];
     }


    for(let i=arr.length-2;i>=0;i--){
        rightProduct[arr.length-1]=1;
        rightProduct[i]=rightProduct[i+1]*arr[i+1];
    }


    for(let i=0;i<arr.length;i++){
        productArray[i]=leftProduct[i]*rightProduct[i];
    }
    return productArray;


}

let arr=[1,2,3,4,5];
let arr1=[5,1,10,1]
console.log(Puzzle(arr)); //output [ 120, 60, 40, 30, 24 ]
console.log(Puzzle(arr1));//output [ 10, 50, 5, 50 ]
