// Find the number of occurrences of a character in a String?

function charOccurence(string,char)
{
    let count=0
    for(let i=0;i<string.length;i++)
    {
        if(string[i]==char)
        {
            count++
        }
            
        
    }
    console.log(count);
}
charOccurence("sangamesh",'s')//output:2
charOccurence("mugli",'m')// output:1