// 8. Implement string reversal. dont use builtin function


function rev(str){
    let store=""
    for(let i=str.length-1;i>=0;i--)
    {
        store=store+str[i]
       
    }
    return store
}
console.log(rev("sangu"))

// output

// ugnas