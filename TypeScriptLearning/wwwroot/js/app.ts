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

namespace UserNamespace {
 
    export interface IUser {
 
        displayInfo():void;
    }
 
    export class User implements IUser {
 
        private _id: number;
        private _name: string;
        constructor(id: number, name: string) {
 
            this._id = id;
            this._name = name;
        }
        displayInfo() {
 
            console.log("id: " + this._id + "; name: " + this._name);
        }
    }
     
    let defaultUser: IUser = new User(2, "Tom");
}

let alice = new UserNamespace.User(4, "Alice");
alice.displayInfo();

namespace UserNamespace.Employees {
 
    export class Employee extends User {
    }
 
    export class Manager extends User { }
}
 
let bill = new UserNamespace.Employees.Employee(5, "Bill");
bill.displayInfo();


import Employee = UserNamespace.Employees.Employee;

let em = new Employee(4,"Emma");
em.displayInfo();

import EmNS = UserNamespace.Employees;

let m = new EmNS.Manager(4,"Manager");
m.displayInfo();

//loading
window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};
