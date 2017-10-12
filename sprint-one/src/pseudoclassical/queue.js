var Queue = function () {
  this.container = {};
  this.count = 0;
  this.first = 0;
  this.last = 0;
};

Queue.prototype.dequeue = function() {
  if(this.count !== 0) {
    this.count--;
  }
  var temp = this.first;
  this.first++;
  return this.container[temp];
};

Queue.prototype.enqueue = function(value) {
  this.container[this.last] = value;
  this.count++;
  this.last++;
};

Queue.prototype.size = function() {
  return this.count;
};