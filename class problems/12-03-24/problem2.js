// To print sub array of a given array

let arr=[7,9,5,6,11]
{
    for(let l=0;l<arr.length;l++)
    {
        for(let r=l;r<arr.length;r++)
        {
            let subArray=[]
            for(i=l;i<=r;i++)
            {
                subArray.push(arr[i])
            }
        }
    }
}

// SUB ARRAY

// -> sub array is a continuous part of an array with same order
//    ex: arr[2,3,4,5,6,-1,11,13]
        [2] [2,3,4] [4,5,6]  [2,3,4,5,6,-1,11,13] [11,13]
// -> empty array is not a sub array
// -> Individual element is a sub array
// -> Entire array is a subarray

//  given an array of length N then the =n*(n+1)/2
//  possible number of subArray