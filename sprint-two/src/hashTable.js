var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  this._storage[index] = bucket;

  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if(tuple[0] === k){
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i]
    if(tuple[0] === k ){
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if(tuple[0] === k ){
      bucket.splice(i,1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions? O(1) or constant time
 */
