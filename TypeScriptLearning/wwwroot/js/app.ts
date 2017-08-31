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

console.log('hello');

import {  Smartphone as Phone } from "./mobiles";

let iphone: Phone = new Phone();
iphone.company = "Apple";
iphone.model = "iPhone 7";
iphone.displayInfo();


////import All
//import * as mobiles from "./mobiles"; // псевдоним для модуля - mobiles
//let tablet: mobiles.Device = new mobiles.Tablet();
//tablet.displayInfo();

////def export

//import SmartWatch from "./smartwatch";
//let watch = new SmartWatch("iwatch");
//console.log(watch.model);


//loading
window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};
