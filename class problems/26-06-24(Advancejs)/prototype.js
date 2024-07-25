let person1={
    name:'Rohit',
    age:23
}

let person2={
    name:'Nikhil',
    age:24

}

console.log(person1);
console.log(person2);


function person(name,age){
    this.name=name
    this.age=age
}

let person3=new person("khandre",24)
console.log(person3);

/*
let person2={
    name:'Nikhil',
    age:24
}
object  (base object provided by language)
|
|
New object
-----------------------------------------------------------
object (base object provided by language)
|
|
Person
|
|
new object
*/ 