const math=require("./math")
const math2=require("./math2")

console.log("Third way");


console.log(math.sum(2,8));//third way
console.log(math.subtract(10,5))//third way
console.log();

console.log("fourth way");

const {sum , mul}=math2

console.log(sum(2,10));//fourth way
console.log(mul(2,9));//fourth way



