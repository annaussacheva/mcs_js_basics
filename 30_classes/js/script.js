let Users = { //есть сайт с пользователями, для всех них есть дефолтные вещи:
	hasAccesToProfile: true,
	approved: true,
	sayHi: function() {return 'Привет'}
}

function User(name, email, password) {
	//конструктор (каждый экземпляр при создании будет получать имя, почту и пароль, равные введенному при объявлении)
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
} //функция генерирует пользователей, у каждого есть имя, почта и пароль 

const Fedya = new User('Федя', 'f@ex.com', 'qwerty');

console.log(Fedya);
console.log(Fedya.sayHi());

function FemUser(name, email, password) {
	//конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function() {return 'Привет, '+ this.name +'! Ты зарегестрирована'}
}

const Alla = new FemUser('Алла', 'a@ex.com', 'qwerty');

console.log(Alla);
console.log(Alla.sayHi());
