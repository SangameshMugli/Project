//Q> given an array find out of leaders, an element is called an leader,if that element is greater than all the elements on the right of it

let arr=[5,7,6,1,-1,0,5,2]

let count=0
for(let i=0;i<arr.length;i++)
{
    flag=true
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            flag=false
            break
        }
    }
    if(flag==true)
    {
        count++
    }
}
console.log(count);


// optimized solution

let max=arr[arr.length-1]
let countOfLeader=1

for(let i=arr.length-2;i>0;i--)
{
    if(arr[i]>max)
    {
        max=arr[i]
        countOfLeader++
    }
}console.log(countOfLeader);
