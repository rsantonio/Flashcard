
var Capitalscard = function(front, back){
	this.front = front;
	this.back = back;
};


var arr = [];

var material = {
	"What is the capital of California?": "Sacramento"
	"What is the capital of Austria?": "Vienna"
	"What is the capital of Norway?" : "Oslo"
	"What is the capital of Taiwan?" : "Taipei"
};

for (var key in material){
	arr.push(new Capitalcard(key, material[key]));
}

module.exports = {arr, Capitalcard};