// if we have multiple function we use json data 
const add=function(a,b){
    return a+b
}

const sub=function(a,b){
    return a-b
}

module.exports={
    sum:add,
    subtract:sub
}