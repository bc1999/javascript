class Cookie {
    constructor(color) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

console.log(cookieOne.getColor());
cookieOne.setColor('yellow');
console.log(cookieOne.getColor());
console.log(cookieTwo.getColor());

class LinkedList {
    constructor(value){

    }

    push(value){ // append

    }

    unshift(value){ // prepend

    }

    insert(index, value){

    }
    remove(index){

    }
    pop(){ // removeLast

    }
    shift(){ // removeFirst

    }
}

let myLinkedList = new LinkedList(23);
myLinkedList.push(7);
myLinkedList.unshift(3);
myLinkedList.insert(1,11);
myLinkedList.remove(1);
myLinkedList.pop();
myLinkedList.shift();
















