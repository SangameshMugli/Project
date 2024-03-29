// How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let array1=[2,2,3,1,3,4,5,6,7,7,6,2]

let hashMap={}
let duplicate=[]
function matchingelements(arr)
{


  for(let i=0;i<array1.length;i++) 
  {
    let element=arr[i]                                 
    if(!hashMap[array1[i]])       
    {
        hashMap[array1[i]]=1      
    }else
    {
        hashMap[array1[i]]+=1    
    }
  }

  for(let key in hashMap)
  {
    if(hashMap[key]>1)
    {
        duplicate.push({ element: parseInt(key), frequency: hashMap[key] })
    }
  }
  return duplicate;
}

console.log(matchingelements(array1))
//output :[
//     { element: 2, frequency: 3 },
//     { element: 3, frequency: 2 },
//     { element: 6, frequency: 2 },
//     { element: 7, frequency: 2 }
//   ]
