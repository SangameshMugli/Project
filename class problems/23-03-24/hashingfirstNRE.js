
// Q>given an array print first non repeating alement



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
for(let key in hashMap)
{
    if(hashMap[key]<=1)
    {
       
        duplicate.push(parseInt(key))// parseInt will convert key into integer
        break
    }

}
console.log(duplicate);




  



