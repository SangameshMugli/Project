// Given n numbers where each number is occuring two times except one number find that number 
 let arr=[1,1,2,2,5,3,3]
 
 let output=0
 for(let i=0;i<arr.length;i++)
 {
    output=output^arr[i]
 }
 console.log(output);
