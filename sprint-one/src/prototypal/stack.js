var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.prototype);
  someInstance.count = 0;
  someInstance.container = {};
  
  //_.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function(value) {
  this.container[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count !== 0) {
    this.count--;
  }
  return this.container[this.count];
};

var newstack = Stack;

