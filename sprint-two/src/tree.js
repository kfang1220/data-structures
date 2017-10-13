var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;
  newTree.children = []; // wants an array of children that have new tree properties
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //child should receive a value
  //should add children to the tree
  //create a new child object
  var child = Tree(value);
  
  this.children.push(child); // currently applying the parent with child values
};

treeMethods.contains = function(target) {
  //should return a boolean for a value in a tree
  var bool = false;
  
  if (this.value === target) {
    bool = true;
  }
  
  
  for (var i = 0; i < this.children.length; i++) {
    //var recursiveBool = this.contains(this.children[i]);
    if (this.children[i].contains(target)) {
      //this.children[i].contains(target)  --looks better
      bool = true;
    }
  }

  return bool;
};



/*
 * Complexity: What is the time complexity of the above functions? O( n )
 */
/*
  var familyTree = {
  someValueName: #,
  someParentNameOrValue: #,
  ifTheyHaveChildren: [
    childOne = {
      someValueName: #,
      someParentNameOrValue: #,
      ifTheyHaveChildren: []
    }, 
    childTwo = {
      someValueName: #,
      someParentNameOrValue: #,
      ifTheyHaveChildren: []
  
    },   
    childThree = {
      someValueName: #,
      someParentNameOrValue: #,
      ifTheyHaveChildren: []
    }]
  }
*/