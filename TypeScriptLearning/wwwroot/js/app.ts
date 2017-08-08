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

class User {
    private _name: string;
    private _year: number;

	public get name():string{
		return this._name;
}

public set name(n:string){
	this._name = n;
}

    constructor(name: string, age: number) {
        this._name = name;
        this._year = this.setYear(age);
    }
    public displayYear(): void {
        console.log("Год рождения: " + this._year);
    }

    public displayName(): void {
        console.log("name: " + this._name);
    }

    private setYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}

let tom = new User("Tom", 24);
tom.displayName();
tom.displayYear();

tom.name = "Tonu";
tom.displayName();

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};