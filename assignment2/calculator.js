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
