// Determine if a string/number is a palindrome?using javascript

function palindrome(str)
{
    let reverse=''
    for(let i=str.length-1;i>=0;i--)
    {
        reverse+=str[i]
    }
    console.log(reverse);
    if(reverse==str)
    {
        console.log("The given string/number is a palindrome");
    }else
    {
        console.log("The given string/number is not a palindrome");
    }

}

palindrome("12321")// output:The given string/number is a palindrome
palindrome("radar")// output:The given string/number is a palindrome
palindrome("hello")// output:The given string/number is not a palindrome

