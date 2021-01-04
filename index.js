/* eslint-disable no-console */
 
class _Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new _Node(100);


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // insert first node
  insertFirst(data) {
    this.head = new _Node(data, this.head);
    this.size++;
  }
  // insert node last
  insertLast(data) {
    let node = new _Node(data);
    let current;
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at index
  insertAt(data, index){
    if(index > 0 && index > this.size){
      return;
    }
    if(index === 0){
      this.insertFirst(data);
      return;
    }
    const node = new _Node(data);
    let current, previous;
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current){
      if(count === index){
        console.log(current.data);
      }
      count ++;
      current = current.next;    
    }
    return null;
  }

  printListData() {
    let current = this.head;
    while(current) {
      console.log(current);
      current = current.next;
    }
  }
}
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 1);
ll.getAt(1);
ll.printListData();