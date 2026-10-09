/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (arr, k) {

    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 0;
        ++map[arr[i]];
    }

    let pq = new MinPriorityQueue(x => x.freq);
    for (key in map) {
        pq.push({ val: key, freq: map[key] })
        if (pq.size() > k) {
            pq.pop();
        }
    }

    return pq.toArray().map(x => Number(x.val))
};