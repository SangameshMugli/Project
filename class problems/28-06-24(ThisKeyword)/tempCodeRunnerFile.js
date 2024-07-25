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