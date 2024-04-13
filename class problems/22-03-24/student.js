class student
{
    constructor(name,age,id)
    {
        this.name=name
        this.age=age
        this.id=id
    }
    getName()
    {
        return this.name
    }
    getAge()
    {
        return this.age
    }
    getId()
    {
        return this.id
    }

    
}

let student1=new student("Sangu",23,51)

console.log(student1.name);
console.log(student1.age);
console.log(student1.id);