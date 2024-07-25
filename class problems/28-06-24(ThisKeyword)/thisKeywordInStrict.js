'use strict'

//globally
// 1. this in browser holds window object globally
// 2.this in Node.js environment it is an empty object
// console.log(this)


// this inside a function 
// 1. this still refers to undefined 
// 2.this in Node.js environment it is an undefined

// function test(){
//     console.log(this);
// }
// test()

//this keyword from a function inside an object
// 1.this in browser refers to current object if the function is called using the obj instance otherwise still refers to undefined object 
// 2.this in nodejs env refers to current object if the function is called using the obj instance otherwise still refers to undefined object

// let obj={
//     name:"vinay",
//     age:24,

//     getThis : function(){
//         console.log(this);
//     },
//     gender :"male"
// }
// obj.getThis()

// let myfunc=obj.getThis

// myfunc()


// this keyword from a function that is inside a function inside an object 
// 1. this in browser refers to undefined  
// 2. this in nodejs env refers to undefined 

let obj2={
    name:"Raju",
    age:26,

    testfunction : function f(){
        function g(){
        console.log(this);
    }
    g()
}
    
}
obj2.testfunction()


//this keyword from a arrow function inside an object
// 1. this in browser refers window object 
// 2.this in nodejs env refers to an empty object 

// let obj1={
//     name:"vinay",
//     age:24,

//     getThis : ()=>{
//         console.log(this);
//     },
//     gender :"male"
// }
// obj1.getThis()