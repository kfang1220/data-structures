var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  var last = 0;
  var temp;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[last] = value;
    last++;
    count++;
  };

  someInstance.dequeue = function() {
    if (count !== 0) {
      count--;
    }
    temp = someInstance[first];
    first++;
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
