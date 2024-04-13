// count number of set bits in a number
//  if n=21

let n=15


let count=0

while(n!=0)
{
    let value=n&1   //and operator => if it gives 1 then it is a set else it is not a set 
    if(value==1)
    {
        count++
    }
    n=n>>1   //right shift to remove the last digit in binary

    
}
console.log(count);