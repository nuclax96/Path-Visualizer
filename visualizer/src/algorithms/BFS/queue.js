export class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the end of the queue
    push(element) {
      this.items.push(element);
    }
  
    // Remove the item at the front of the queue and return it
    pop() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Peek at the item at the front of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }