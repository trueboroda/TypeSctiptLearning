class Greeter {
	element: HTMLElement;
	span: HTMLElement;
	timerToken: number;

	constructor(element: HTMLElement) {
		this.element = element;
		this.element.innerHTML += "The time is: ";
		this.span = document.createElement('span');
		this.element.appendChild(this.span);
		this.span.innerText = new Date().toUTCString();
	}

	start() {
		this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
	}

	stop() {
		clearTimeout(this.timerToken);
	}

}


interface IUser {	
	name: string;
	age?: number;
	getInfo(): void;
	getClassName(): void;
}

interface IMovable {

	speed: number;
	move(): void;
}
interface ICar extends IMovable {

	fill(): void;
}
class Car implements ICar {

	speed: number;
	move(): void {

		console.log("Машина едет со скоростью " + this.speed + " км/ч");
	}

	fill(): void {

		console.log("Заправляем машину топливом");
	}
}

let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();


interface FullNameBuilder {
	(name: string, surname: string): string;
}

let simpleBuilder: FullNameBuilder = function (name: string, surname: string): string {
	return "Mr." + name + " " + surname;
}

let fullName = simpleBuilder("Tony", "Montana");
console.log(fullName);

interface StringArray {
	    [index: number]: string;
}

let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];

let myPhone: string = phones[0];
console.log(myPhone);

interface Dictionary {
	[index: string]: string;
}

var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]);

interface PersonInfo {
	(name: string, surname: string): void;
	fullName: string;
	password: string;
	authenticate(): void;
}

function personBuilder(): PersonInfo {

	let person = <PersonInfo>function (name: string, surname: string): void {
		person.fullName = name + " " + surname;
	};
	person.authenticate = function () {
		console.log(person.fullName + " входит в систему с паролем " + person.password);
	};
	return person;
}

let tom = personBuilder();
tom("Tom", "Simpson");
tom.password = "qwerty";
tom.authenticate();

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};