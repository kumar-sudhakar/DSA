/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let unique = new Set(candyType);

    return Math.min(unique.size, candyType.length / 2);
};