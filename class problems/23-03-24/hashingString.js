// Q> Given a string find the duplicate words and print it using hashing

let string = "sangamesh"

let array=string.split('')
console.log(array);

let duplicates=[]
let hashMap={}

// console.log(hashMap['a']);accessing hashmap

for(let i=0;i<array.length;i++)
{
    if(!hashMap[array[i]])
    {
        hashMap[array[i]]=1
    }else
    {
        hashMap[array[i]]+=1
    }
}

console.log(hashMap);


for(let key in hashMap)
{
    if(hashMap[key]>1)
    {
        duplicates.push(key)
    }
}

console.log(duplicates);