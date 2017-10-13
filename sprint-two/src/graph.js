

// Instantiate a new graph
var Graph = function(nodes = [], edges = []) {
  //graph is not linked list
  //graph node can have multiple targets
  //each node should contain array of nodes/edges
  this.nodes = nodes;
  this.edges = edges;
  //this.isEdge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //to add a node to a current node. push new node into its array
  //each new node will have an edge with the current node since its undirected
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	//check if array contains the specified node
 return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remove node from current nodes array
  //using index of we can find location of where node is in array and splice it
  //we can do the same for edges
  this.nodes.splice(this.nodes.indexOf(node), 1);
  this.edges.splice(this.edges.indexOf(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // //should explain if there is a connection between one node to another;
  //var edge = false;
  // //look at fromNode if it is directing to the toNode
  // //look at toNode to determine if it is directing back to fromNode
  // return edge;
   var result = false;

  if (this.edges[fromNode] && this.edges[toNode]) {
    result = this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode);
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //will create an edge of two specific nodes
  //node1 should direct to node2
  //node2 should say that it came from node1
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //should change the nodes to and from to null?
  //take current nodes edges and splice the edge in its edge array with value of the corresponding node
  //vice versa with the other node
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
  this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //apply the callback function to the node
  this.nodes.forEach(function(node){
  	return cb(node);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


