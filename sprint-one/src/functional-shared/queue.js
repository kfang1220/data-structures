var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.container = {};
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.count = 0;
  //someInstance.temp;
  
  
  _.extend(someInstance, queueMethods);
  return someInstance; 
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.container[this.last] = value;
  this.last++;
  this.count++;
};
queueMethods.dequeue = function () {
  if (this.count !== 0) {
    this.count--;
  }
  var temp = this.first;
  this.first++;
  return this.container[temp];
};

queueMethods.size = function () {
  return this.count;
};