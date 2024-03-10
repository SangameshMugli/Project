// 2. Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user

let operator= prompt("Enter Operator")
let num1= parseFloat(prompt("enter 1st num"))
let num2= parseFloat(prompt("enter 2nd num"))

let result
if(operator=="+")
{
   result=num1+num2
   console.log(result);

}
else if (operator=="-")
{
    result=num1-num2
    console.log(result);
}
else if (operator=="*")
{
    result=num1*num2
    console.log(result);
}

else (operator=="/")
{
    result=num1/num2
    console.log(result);
}
