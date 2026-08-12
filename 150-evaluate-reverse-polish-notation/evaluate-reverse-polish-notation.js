/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let val ;

    for(let i = 0 ; i < tokens.length ; i++){
        if(["+" , "-" , "/" , "*"].includes(tokens[i])){
            let a = stack.pop();
            let b = stack.pop();
            
            if(tokens[i] === "+"){
                val = b + a ; 
            }
            else if(tokens[i] === "-"){
                val = b - a;
            }
            else if(tokens[i] === "/"){
                val = Math.trunc(b/a);
            }
            else{
                val = b * a;
            }
            stack.push(val);
        }
        else{
            stack.push(Number(tokens[i]));
        }
    }
    return stack.pop();
};