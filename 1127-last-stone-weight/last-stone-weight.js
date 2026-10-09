/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let pq = MaxPriorityQueue.fromArray(stones);

    while(pq.size() > 1) {
        let y = pq.dequeue();
        let x = pq.dequeue();

        if (y - x > 0) {
            pq.enqueue(y - x);
        }
    }
    return pq.dequeue() || 0;
};