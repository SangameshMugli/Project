class Employee
{
    constructor(name,id,age,salary,address,manager)
    {
        this.name=name
        this.id=id
        this.age=age
        this.salary=salary
        this.address=address
        this.manager=manager
    }

    getName()
    {
        return this.name
    }
    getId()
    {
        return this.id
    }
    getAge()
    {
        return this.age
    }
    getSalary()
    {
        return this.salary
    }
    getAddress()
    {
        return this.address
    }
    getManager()
    {
        return this.manager
    }

}

let Employee1=new Employee("abhi",193,23,90000.01,"Bidar","abc")

console.log(Employee1);