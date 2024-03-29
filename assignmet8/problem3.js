// How to find out if the given two strings are anagrams or not?


function anagrams(str1, str2) 
{
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if (str1.length !== str2.length) 
    {
        return "The given string is not an anagram" 
    }

    let charCount1 = {}
    let charCount2 = {}

    for (let char of str1) 
    {
        charCount1[char] = (charCount1[char] || 0) + 1
    }

    for (let char of str2) 
    {
        charCount2[char] = (charCount2[char] || 0) + 1
    }

    for (let char in charCount1) 
    {
        if (charCount1[char] !== charCount2[char]) {
            return "The given string is not an anagram"
        }
    }

    return ("The given string is an anagram")
}
console.log(anagrams("bored", "robed"))  // Output: The given string is an anagram
console.log(anagrams("hostel","houses")) // output: The given string is not an anagram
console.log(anagrams("cat", "act"))     // Output: The given string is not an anagram












