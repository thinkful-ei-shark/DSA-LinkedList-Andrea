/* eslint-disable eqeqeq */
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  // insert first
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //insert last
  insertLast(data){
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
       
      }
      current.next = node;
    }
  }

  //remove item
  remove(item) {
    if(!this.head) {
      return null;
    }
    if (this.head.data === item) {
      this.head = this.head.next;
    }

    let current = this.head;
    let previous = this.head;
    
    while (current !== undefined && current.data !== item) {
      previous = current; 
      current = current.next;
    }
    if (current == null) {
      return;
    }
    previous.next = current.next;
  }

  //find item

  findData(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.data !== item) {
      if(currNode.next == null) {
        console.log('not found');
        return null;
      } else {
        currNode = currNode.next;
      }
    } console.log(currNode.data + ' found');
    return currNode;
  }

  insertAfter(key, newItem){
    let insertHere = this.findData(key);
    let currentNext = insertHere.next;
    insertHere.next = new Node(newItem, currentNext);

  }
  insertBefore(key, newItem) {
    let current = this.head;
    if (!this.head) {
      return null;
    }
    while (current) {
      if (current.next.data === key) {
        let newNext = current.next;
        current.next = new Node(newItem, newNext);
        return;
      } else {
        current = current.next;
      }
    }
  }
  // Find Previouse Node
  findPrevious(key) {
    let current = this.head;
    if (!this.head) {
      return null;
    }
    while (current) {
      if (current.next.data === key) {
        return current;
      } else {
        current = current.next;
      }
    }
  }
  // Insert at Index Position
  insertAt(index, newItem) {
    if(!this.head) {
      return null;
    }
    let i = 0;
    let current = this.head;
    while(i < index) {
      current = current.next;
      i++;
    }
    this.insertBefore(current.data, newItem);
  }
  // Size of List
  listSize() {
    let current = this.head;
    let count = 0;
    while(current) {
      count++;
      current = current.next;
    }
    return count;
  }
  // is List Empty?
  isEmpty(){
    if (!this.head){
      return true;
    } else {
      return false;
    }
  }
  // Find last Node
  findLast(){
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      while(current.next !== undefined) {
        current = current.next;
      }
      return current;
    } 
  }
  // 3rd from end
  thirdFromEnd() {
    let last = this.findLast();
    let secondLast = this.findPrevious(last.data); 
    let third = this.findPrevious(secondLast.data);
    return third;
  }
  // Reverse List
  reverseList(head) {
   
    let tmp = this.reverseList(head.next); 
    console.log(head.next);
    head.next.next = head;
    head.next = undefined;   
    return tmp;
  }
  // Print list data
  printListData() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


function main() {
//create a linked list with name of SLL
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Monkey');
  SLL.insertLast('Tauhida');
  SLL.printListData();
}

main();
