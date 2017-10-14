var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function (value) {
  }

  list.removeTail = function () {
  }

  list.addToTail = function(value) {
    var newNode = Node();
    newNode.value = value;

    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    }
    newNode.previous = list.tail;
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {

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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
