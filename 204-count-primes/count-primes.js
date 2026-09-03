/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;

    let isPrime = new Uint8Array(n);
    isPrime.fill(1);

    isPrime[0] = 0;
    isPrime[1] = 0;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        count += isPrime[i];
    }

    return count;
};