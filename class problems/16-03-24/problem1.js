function findDuplicates(nums) {
    const hashTable = {}; // Object to act as a hash table
    const duplicates = []; // Array to store duplicate numbers

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Check if the number is already in the hash table
        if (hashTable[num] === undefined) {
            // If not, mark it as seen by setting its value to true
            hashTable[num] = true;
        } else {
            // If it's already in the hash table, it's a duplicate
            if (!duplicates.includes(num)) {
                // Only push it to duplicates array if it's not already there
                duplicates.push(num);
            }
        }
    }

    return duplicates;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 8, 9];
const duplicates = findDuplicates(numbers);
console.log("Duplicate numbers:", duplicates);
