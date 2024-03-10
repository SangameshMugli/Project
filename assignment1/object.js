// 6. how iterate over an object data? explain with an example


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


// output
// [
//     [ 'name', 'sangamesh' ],
//     [ 'phone_No', 9900890541 ],
//     [ 'branch', 'civil' ],
//     [ 'college', 'REVA UNIVERSITY' ],
//     [ 'passed_out', 2021 ]
//   ]
//   my name is sangamesh
//   my phone_No is 9900890541
//   my branch is civil
//   my college is REVA UNIVERSITY
//   my passed_out is 2021