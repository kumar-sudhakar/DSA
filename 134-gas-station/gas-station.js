/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currSaving = 0;
    let totalSaving = 0;
    let ans = 0 ;

    for(let i = 0 ; i < gas.length ; i++){
     let Saving = gas[i] - cost[i];
     currSaving = currSaving + Saving;
     totalSaving = totalSaving + Saving;

     if(currSaving < 0 ){
        currSaving = 0;
        ans = i + 1;
     }
    }
    return (totalSaving < 0 ) ? -1 : ans; 
};