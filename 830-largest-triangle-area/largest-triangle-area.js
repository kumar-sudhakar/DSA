/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {

                let [x1, y1] = points[i];
                let [x2, y2] = points[j];
                let [x3, y3] = points[k];

                let area = Math.abs(
                    x1 * (y2 - y3) +
                    x2 * (y3 - y1) +
                    x3 * (y1 - y2)
                ) / 2;

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};