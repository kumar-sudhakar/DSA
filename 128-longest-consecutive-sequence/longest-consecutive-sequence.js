/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {

        // Start of a sequence
        if (!set.has(num - 1)) {

            let current = num;
            let count = 1;

            // Keep checking next number
            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};