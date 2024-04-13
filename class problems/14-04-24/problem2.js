// Given number "a" and "i" check if ith bit of "a" is set or not 
//  Ex a=20 and i=3

let a=10
let i=3

if((a & (1 << i-1)) != 0){
    console.log("true");
}else{
    console.log("flase");
}


