var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try no   t not reference your old code in writing the new style.
  this.count = 0;
  this.container = {};
};

Stack.prototype.push = function(value) {
  this.container[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if(this.count !== 0) {
    this.count--;
  }
  return this.container[this.count];
};

Stack.prototype.size = function() {
  return this.count;
};


