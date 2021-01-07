class Tiger {
	constructor(name) {
		this.name = name;
	}
	//method
	feedCat() {
		return 'Purrrrrr';
	}
}

class angryTiger extends Tiger {
	throwDart() {
		return 'ZzZzzZzZz';
	}
}

const Woo = new Tiger('woo');
console.log(Woo.feedCat());

const Boo = new angryTiger('boo');
console.log(Boo.throwDart());