/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;

    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i])
    }
    return null;

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.enqueue(val);
    if (this.heap.size() > this.k) {
        this.heap.dequeue()
    }

    return this.heap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */