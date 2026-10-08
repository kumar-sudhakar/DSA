/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);
        if (pq.size() > k) {
            pq.dequeue()
        }
    }
    return pq.front();
};