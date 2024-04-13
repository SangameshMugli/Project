// What is hashing?
// -> Hashing is a key value storage mechanism
// -> Searching in hashing is very easy


// Q> Given an integer array print duplicate numbers

let arr=[2,2,3,1,3,4,5,6,7,7,6,2]


let duplicatedValue = [];

for (let i = 0; i < arr.length; i++)  //  arr=[2,2,3,1,3,4,5,6,7,7,6,2]
{
    if (duplicatedValue.includes(arr[i]))           // i=0 arr[0]=2   2 is not included in duplicated value then it will go to for loop
    {                                               // i=1 arr[1]=2   2 is included in duplicate value so it will increment i++
        continue;
    }
    for (let j = i + 1; j < arr.length; j++)         // j=i+1 -> j=2
    {
        if (arr[i] === arr[j])                       //i==j->2=2 =>it will push in duplicatedvalue array
        {
            duplicatedValue.push(arr[i]);
            break;
        }
    }
}

console.log(duplicatedValue);



console.log("USING HASHMAP");




let array1=[2,2,3,1,3,4,5,6,7,7,6,2]

let hashMap={}
// console.log(hashMap['a']);

// {}-> stores in key value pair

// array[1,2,3,4,2,2,1] -> {'1':2,'2':3,'3':1,'4':1}



let duplicate=[]

for(let i=0;i<array1.length;i++)   // array1=[2,2,3,1,3,4,5,6,7,7,6,2]
{                                  //  i=0 array1[0]=2    hashmap['2']=true
    if(!hashMap[array1[i]])       
    {
        hashMap[array1[i]]=1      //2=1
    }else
    {
        hashMap[array1[i]]+=1    // 2=1->2=2 , 2=2->2=3
    }

    
}

console.log(hashMap);

console.log("*******");
for(let key in hashMap)
{
    if(hashMap[key]>1)
    {
       
        duplicate.push(parseInt(key))// parseInt will convert key into integer
    }

}
console.log(duplicate);




  



