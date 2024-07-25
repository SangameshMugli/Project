class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    hello(){
        console.log(`${this.name}says hello`);
    }
}

class Teacher extends Person{
    constructor(name,age,subject,classStrength){
        super(name,age)
        this.subject=subject
        this.classStrength=classStrength
    }
}

let person1=new Person("sangamesh",24)

console.log(person1);