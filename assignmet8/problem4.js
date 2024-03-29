// How do you calculate the number of vowels and consonants in a String?

let str=['a','e','i','o','u','A','E','I','O','U']



function calculate(string)
{
    let countvowel=0
    let countconsonants=0
    for(let i=0;i<string.length;i++)
    {
        if(str.includes(string[i]))
        {
            countvowel++
        }
        else
        {
            countconsonants++
        }
    }
    console.log("vowels :"+countvowel);
    console.log("consonants :"+ countconsonants);
}

let string1="sangamesh"
let string2="hELlo"
calculate(string1) //output : vowels :3   consonants :6(which includes repetation of alphabet also)
calculate(string2) //output : vowels :2   consonants :3
