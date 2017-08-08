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

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};