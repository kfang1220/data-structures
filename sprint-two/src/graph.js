

// Instantiate a new graph
var Graph = function() {
  //node will need a value
  //node will need to know where it is coming from
  //node will need to know if it is going anywhere
  //is an edge node
  //is an has an edge node
  this.container = {};
  this.next = null;
  this.previous = null;
  this.value = null;
  
  
  //this.isEdge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //should add node to the graph
  //should pass in the node's value
  this.value = node;
  //var newNode = Graph();
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var bool = false;
  if (this.value === node) {
    bool = true;
  }
  return bool;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //to remove a node, change the node's directions
  if (node.value === node) {
    node.previous.next = node.next;
    node.next.previous = node.previous;
  }
  
  this.value = null;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // //should explain if there is a connection between one node to another;
  // var edge = false;
  // //look at fromNode if it is directing to the toNode
  // //look at toNode to determine if it is directing back to fromNode
  // return edge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //will create an edge of two specific nodes
  //node1 should direct to node2
  //node2 should say that it came from node1
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //should change the nodes to and from to null?
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //apply the callback function to the node
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


