﻿class Greeter {
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



let names: string[] | string | number;
names = "Tom";
console.log(names); // Tom
names = ["Alice", "Bob"];
console.log(names[1]);  // Bob
names = 6;
console.log(names);

type stringOrNumberType = number | string;

let sum: stringOrNumberType = 36.6
if (typeof sum == "number") {
	console.log(sum / 6);
}


let someAnyValue: any = "hello world!";
let strLength: number = (<string>someAnyValue).length;
console.log(strLength); // 12

let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength);

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};