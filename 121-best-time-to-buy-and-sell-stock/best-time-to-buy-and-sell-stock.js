/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let currentProfit = 0;
    for(let i =1 ; i<prices.length ; i++){
     maxProfit = prices[i] - minPrice

    currentProfit = Math.max(maxProfit , currentProfit)

     if(prices[i] < minPrice){
        minPrice = prices[i]
     }
    }
    return currentProfit;

    

};