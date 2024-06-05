const fs=require('node:fs');

console.log("File read start")

try{
    const data=fs.readFileSync("./text.txt",'utf8');
    console.log("-------File read-------");
}catch(err){
    console.error(err);
}

console.log("file read end")