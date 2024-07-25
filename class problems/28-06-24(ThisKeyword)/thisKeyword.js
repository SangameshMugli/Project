//In Javascript this keyword refers to object

//globally
// 1. this in browser holds window object globally
// 2.this in Node.js environment it is an empty object
console.log(this)



// this inside a function 
// 1. this still refers to window object
// 2.this in Node.js environment it is an global object
//(global object is also similar to window object but here the global object is provided by the nodejs environment)

function test(){
    console.log(this);
}
test()


//this keyword from a function inside an object
// 1.this in browser refers to current object if the function is called using the obj instance otherwise still refers to window object 
// 2.this in nodejs env refers to current object if the function is called using the obj instance otherwise still refers to global object 
let obj={
    name:"vinay",
    age:24,

    getThis : function(){
        console.log(this);
    },
    gender :"male"
}
obj.getThis()

let myfunc=obj.getThis
myfunc()



// this keyword from a function that is inside a function inside an object 
// 1. this in browser refers to window object 
// 2. this in nodejs env refers to global object
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

let obj1={
    name:"vinay",
    age:24,

    getThis : ()=>{
        console.log(this);
    },
    gender :"male"
}
obj1.getThis()