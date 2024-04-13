function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
}

console.log(power(2,3))

// function findSubsequences(array) {
//     const subsequences = [];
//     const n = array.length;
//     const totalSubsequences = power(2, n);

//     for (let i = 1; i < totalSubsequences; i++) {
//         const subsequence = [];
//         for (let j = 0; j < n; j++) {
//             if ((i & (power(2, j))) > 0) {
//                 subsequence.push(array[j]);
//             }
//         }
//         subsequences.push(subsequence);
//     }

//     return subsequences;
// }

// const array = [2, 3, 9];
// const subsequences = findSubsequences(array);
// console.log(subsequences);
