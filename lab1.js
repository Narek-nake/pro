// var o1 = {};
// var o2 = new object();
// if (o1 === o2){
// 	console.log("true");
// }


// var arr1 = [];
// var arr2 = new Array();//typeof



function User(name,age){
	this.name = name;
	this.age = age;
	this.isAdmin = false;
	this.say = function(w){console.log(w);}

var u1 = new User("Hayk", 20);
