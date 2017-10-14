var BinarySearchTree = function(value) {
  //psuedoclassical creates a variable to begin with
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function (value) {
  //calculate if it needs to go left or right of value
  //check if the value is in the right place or continue down
  //once there are no conflicts
  var newNode = new BinarySearchTree(value);
  var currentNode = this;
  //check node.value to the currentNode.value
  //look at the correct branch and determine if it needs to go further
  if(newNode.value < currentNode.value) {
    if(currentNode.left === null) {
      currentNode.left = newNode;
    } else {
      currentNode.left.insert(newNode.value)
    }
  } else {
    if(currentNode.right === null) {
      currentNode.right = newNode;
    } else {
      currentNode.right.insert(newNode.value);
    }
  }

  return newNode.value;
};

BinarySearchTree.prototype.contains = function (value) {
  //determine if the value exists within the tree
  //give back a boolean answer
  var currentNode = this;
  if(currentNode.value === value) {
    return true;
  }

  if(value < currentNode.value) {
    if(currentNode.left) {
      if(currentNode.left.contains(value)){
        return true;
      }
    }
  } else {
    if(currentNode.right) {
      if(currentNode.right.contains(value)) {
        return true;
      }
    }
  }
  return false;
};
BinarySearchTree.prototype.depthFirstLog = function (callback) {
  var currentNode = this;

  if(currentNode !== null) {
    callback(this.value);
  }
  if(currentNode.left !== null) {
    currentNode.left.depthFirstLog(callback);
  }
  if(currentNode.right !== null) {
    currentNode.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
