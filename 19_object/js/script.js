console.log('You are at ' + window.location);

let person = {
	name : 'Anna',
	surname : 'Usacheva',
	age : 24,
	student : true,
	sayHello : function() {return 'Hello ' + this.name}
}

console.log(person.name);
console.log(person.sayHello());

person.city = 'Moscow';

console.log(person);

person.age = 26;

console.log(person);

console.log(person['surname']);