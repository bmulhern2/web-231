var myName = function() { return myName.brendan};
var myName.brendan = function() {};
console.log(myName());
