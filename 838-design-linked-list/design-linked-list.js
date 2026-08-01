function createNode(data){
    this.data = data;
    this.next = null;
}

let node1 = new createNode(5);

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
if(index < 0 || index >= this.size) return -1

    let curr = this.head;

    for(let i = 0 ; i < index ; i++){
        curr = curr.next;

    }
    return curr.data
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new createNode(val)
    node.next = this.head;
    this.head = node;
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
let node3 = new createNode(val)
    if( this.head== null){
        this.head = node3
        this.size++
        return;
    }
    
    let curr = this.head;
    while(curr.next !== null){
        curr = curr.next;
    }
    curr.next = node3;
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index < 0 || index > this.size) return 

    else if(index == 0){
        this.addAtHead(val)
        return
    }
  
    else if (index ==  this.size ){
        this.addAtTail(val)
        return
    }

    
    else {
          let node4 = new createNode(val)
        let curr = this.head
        for(let i = 0 ; i < index - 1 ; i++){
            curr = curr.next;
        }
        node4.next = curr.next;
        curr.next = node4;
        this.size++;

    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return 

    if(index === 0 ){
        this.head = this.head.next;
        this.size--
        return
    }
    
    let curr = this.head
    for(let i = 0 ; i < index -1 ; i++){
        curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */