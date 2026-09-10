/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let map = new Map();

    // Count frequency
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Create buckets
    let bucket = Array.from({ length: nums.length + 1 }, () => []);

    for (let [num, freq] of map) {
        bucket[freq].push(num);
    }

    // Get top k frequent elements
    let answer = [];

    for (let i = bucket.length - 1; i >= 0; i--) {
        for (let num of bucket[i]) {
            answer.push(num);

            if (answer.length === k) {
                return answer;
            }
        }
    }
};
