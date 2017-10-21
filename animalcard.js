
var Animalcard = function(front, back){
	this.front = front;
	this.back = back;
};


var arr = [];

var material = {
	"What is the collective name for a group of lions?" : "pride"
	"What is a cabbage white?": "butterfly"
	"Which is the largest mammal in the world?" : "blue whale"
	"What do camels hold within their hump backs?" : "water"
};

for (var key in material){
	arr.push(new Animalcard(key, material[key]));
}

module.exports = {arr, Animalcard};