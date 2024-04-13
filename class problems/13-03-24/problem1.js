// Given an array print the sum of all subArray

let arr=[4,-1,1,6,5]

for(let l=0;l<arr.length;l++)
{
    for(let r=l;r<arr.length;r++)
    {
        let sum=0
        for(let i=l;i<=r;i++)
        {
            sum+=arr[i]

        }
        console.log(sum);
    }
}


console.log("***optimized solution***");


let cumarr=[arr[0]]
for(let i=1;i<arr.length;i++)
{
    cumarr[i]= cumarr[i-1]+arr[i]
}
console.log(cumarr);

for(let l=0;l<arr.length;l++)
{
    let sum=0
    for(let r=l;r<arr.length;r++)
    {
        if(l==0)
        {
            sum=cumarr[r]

        }else
        {
            sum=cumarr[r]-cumarr[l-1]
        }
        console.log(sum);
        
    }
}