/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let passenger = new Array(1001).fill(0);

    for (let i = 0; i < trips.length; i++) {
        let [numPassengers, from, to] = trips[i];

        passenger[from] += numPassengers;
        passenger[to] -= numPassengers;

    }

    let countPassenger = 0;

    for (let i = 0; i < passenger.length; i++) {
        countPassenger += passenger[i];

        if (countPassenger > capacity) {
            return false;
        }
    }
    return true;
};