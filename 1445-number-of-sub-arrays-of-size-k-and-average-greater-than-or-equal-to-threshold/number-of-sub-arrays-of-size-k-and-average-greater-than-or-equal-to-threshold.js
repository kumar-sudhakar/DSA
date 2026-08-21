/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let left = 0;
    let count = 0;
    let avg = 0;
    let sum = 0;

    for (let right = 0; right < arr.length; right++) {
        let window = right - left + 1;
        sum = sum + arr[right];

        if (window === k) {
            avg = sum / k;
            if (avg >= threshold) {
                count++;

            }
            sum = sum - arr[left];
            left++;

        }
    }
    return count;
};