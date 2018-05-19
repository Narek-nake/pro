// object.prototype.y = 10;
// number.prototype.z = 5;



function User(name,age){
	this.name = name;
	this.age = age;
	this.foo = function(){console.log('Foo');}
}
// User.prototype.foo = 5;
User.prototype.x = 5;

user1 = new User('hayk', 14);

// for(var item in user1){
// 	console.log(item, user1[item]);
// }

for(var item in user1){
	if(user1.hasOwnProperty(item))
	console.log(item);
}