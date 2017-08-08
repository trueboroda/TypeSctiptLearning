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
	id: number;
	name: string;
}

class User {

	name: string;
	constructor(userName: string) {

		this.name = userName;
	}
	getInfo(): void {
		console.log("Имя: " + this.name);
	}

	getClassName(): string {
		return "User";
	}
}


class Employee extends User {
	company: string;

	constructor(company: string, name: string) {
		super(name);
		this.company = company;
	}

	getInfo(): void {
		super.getInfo();
		console.log(this.name + " работает в компании " + this.company);
	}

	getClassName(): string {
		return "Employee";
	}
}



let tom: User = new User("Tom");
tom.getInfo();
console.log(tom.getClassName());

let alice: User = new Employee("Microsoft", "Alice");
alice.getInfo();
console.log(alice.getClassName());

let bill: Employee = new Employee("Google", "Bill");
bill.getInfo();
console.log(bill.getClassName());

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};