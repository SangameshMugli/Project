// To find the minimum sub array

//  THUMB RULE
// -> If we are intrested in calculating minima we should always start with assigning maximum number possible(number.Max_VALUE)



let arr=[4,-1,3,-3]

let cumarr=[arr[0]]
for(let i=1;i<arr.length;i++)
{
    cumarr[i]= cumarr[i-1]+arr[i]
}
console.log(cumarr);



let minimum=Number.MAX_VALUE
for(l=0;l<arr.length;l++)
{
    for(r=l;r<arr.length;r++)
    {
        let sum=0
        if(l==0)
        {
            sum=cumarr[r]
        }
        else
        {
            sum=cumarr[r]-cumarr[l-1]
        }
        if(sum<minimum)
        {
            minimum=sum
        }
    }
}console.log(minimum);