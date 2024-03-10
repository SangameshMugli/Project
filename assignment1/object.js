let obj={
    name:"sangamesh",
    phone_No:9900890541,
    branch:"civil",
    college:"REVA UNIVERSITY",
    passed_out:2021
}

console.log(Object.entries(obj))

let arr1=Object.entries(obj)

for(let i=0;i<arr1.length;i++)
{
    console.log("my "+arr1[i][0]+" is "+arr1[i][1])
}