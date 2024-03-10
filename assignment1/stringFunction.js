let arr=["sangamesh","abhi","nikhil","rohit"]
let count=0

function search(string)
{
    for(let i=0;i<arr.length;i++)
    {
        if(string==arr[i])
        {
           count=count+1
        }
    }

    if(count==0){
        console.log(string+" Name not found");
    }
    else{
        console.log(string+" Name Founded ");
    }
}
search("rohit")