// Simple class representing a node in a data structure
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentNode = this.head;

    while(currentNode) {
      // If the current nodes next node exists but does not have a next, we are at the second to last node
      if (!currentNode.next.next) {
        this.tail = currentNode;
        this.tail.next = null;
        this.length--;

        // Handles case where there is only one node in the list
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }

        return currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
}

const list = new SinglyLinkedList();

list.push(2);
list.push(4);
list.push('Hello');
list.push('Foobar');

list.pop();
list.pop();
list.pop();

console.log(list);

