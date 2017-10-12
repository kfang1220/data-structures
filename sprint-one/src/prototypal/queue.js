var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.last = 0;
  someInstance.first = 0;
  someInstance.container = {};
  
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function (value) {
  this.container[this.last] = value;
  this.count++;
  this.last++;
};
queueMethods.dequeue = function () {
  if (this.count !== 0) {
    this.count--;
  }
  var temp = this.container[this.first];
  this.first++;
  return temp;
};
