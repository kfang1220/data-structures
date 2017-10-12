var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.container = {};
  
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.count;
};

stackMethods.push = function(value) {
  this.container[this.count] = value; 
  this.count++;
};

stackMethods.pop = function() {
  if (this.count !== 0) {
    this.count--;
  }
  return this.container[this.count];
};
