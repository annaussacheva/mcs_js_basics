class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	//methods
	sayHi() {
		return 'Hello '+this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Привет, '+this.name+'. Ты зарегистрирована!'
	}
}

const Egor = new User('Егор', '34@gmail.com', '123');
console.log(Egor);
console.log(Egor.sayHi());


const Masha = new Female('Маша', '4444@gmail.com', '1903');
console.log(Masha);
console.log(Masha.sayHi());