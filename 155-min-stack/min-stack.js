
var MinStack = function() {
    this.stack = [];
    this.minStack = [];

};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);

    if(this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]){
        this.minStack.push(value)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removed = this.stack.pop()

    if(removed === this.minStack[this.minStack.length - 1]){
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */