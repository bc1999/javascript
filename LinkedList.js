class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){ // append
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            
        }

        this.length++;
        return this;

    }

    pop(){
        // if (this.length === 0) return undefined;
        if(!this.head) return undefined;// this.head is null, empty linkedList

        let temp = this.head;
        let pre = this.head;

        while(temp.next){ // moving from left to right
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head=null;
            this.tail=null;
        }
        return temp;
    }
    
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 4, next: null },
//     tail: Node { value: 4, next: null },
//     length: 1
//   }


// push(value)
console.log("myLinkedList2.push(4)")
let myLinkedList2 = new LinkedList(7);
myLinkedList2.push(4);
console.log(myLinkedList2);
// LinkedList {
//     head: Node { value: 7, next: Node { value: 4, next: null } },
//     tail: Node { value: 4, next: null },
//     length: 2
//   }

// pop()
console.log("myLinkedList3.pop()")
let myLinkedList3 = new LinkedList(1);
myLinkedList3.push(2);
console.log(myLinkedList3);
myLinkedList3.pop();
console.log(myLinkedList3);
myLinkedList3.pop();
console.log(myLinkedList3);
console.log(myLinkedList3.pop());

  
  