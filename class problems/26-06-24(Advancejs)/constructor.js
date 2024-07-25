console.log("This is an constructor function Which creates javascript object without class");

function Car(nameParam,colorParam,topspeedParam){
    this.name=nameParam
    this.color=colorParam
    this.topSpeed=topspeedParam

    this.drive=function(){
        console.log(`I am driving a ${this.name} car at a speed of ${this.topSpeed } and the color is ${this.color}`);
    }

}

let Car1=new Car("ferrari","red","200kmph")
console.log(Car1);
Car1.drive();