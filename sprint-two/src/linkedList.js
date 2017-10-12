var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // [] [] [] [] []
    //have previous tail point at this new node
    //have list.tail point at last node
    var newNode = Node();
    newNode.value = value;
    
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    }
    
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    //contains should return a boolean if target is within or not within
    var current = list.head;
    var bool = false;
    while (current !== null) {
      if (target === current.value) {
        bool = true;
      }
      current = current.next;
    }
    return bool;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
