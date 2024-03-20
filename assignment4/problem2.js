// Problem Description
// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



// Problem Constraints
// 1 <= N, M <= 10^5
// 1 <= A[i] <= 10^9
// 0 <= L <= R < N


// Input Format
// The first argument is the integer array A.
// The second argument is the 2D integer array B.



function rangeSumQuery(A, B) {
    // let n = A.length;
    let m = B.length;
    
    const result = [];
    for (let i = 0; i < m; i++) {
        let L = B[i][0];
        let R = B[i][1];
        
        let sum = 0;
        for (let j = L; j <= R; j++) {
            sum += A[j];
        }
        
        result.push(sum);
    }
    
    return result;
}

// Example usage:
console.log(rangeSumQuery([1, 2, 3, 4, 5], [[0, 3], [1, 2]])); // Output: [10, 5]
console.log(rangeSumQuery([2, 2, 2], [[0, 0], [1, 2]])); // Output: [2, 4]


