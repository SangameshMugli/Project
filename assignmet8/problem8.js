// How would you swap two numbers without using a third variable?

function swapnumbers(a,b)
{
   a=a+b
   b=a-b
   a=a-b
   console.log("a="+a);
   console.log("b="+b); 
}

swapnumbers(10,15)//output:a=15  b=10
swapnumbers(1,9)//  output:a=9   b=1



