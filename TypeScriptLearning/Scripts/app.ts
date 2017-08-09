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

class User<T> implements IUser<T> {
    private _id: T;
    constructor(id:T) {
        this._id=id;
    }
    getId(): T {
        return this._id;
    }
	getInfo(){
		console.log(this._id);
	}
}

let tom = new User<number>(3);
console.log(tom.getId()); // возвращает number

let alice = new User<string>("vsf");
console.log(alice.getId()); // возвращает string

function userFactory<T>(type: { new (id:number): T; }): T {
    return new type(1);
}

let user = userFactory(User);
console.log(user);

interface IUser<T> {
    getInfo():void;
}

class UserInfo<T extends IUser<T>>{
	getUserInfo(user: T): void{
		user.getInfo()
}
}

let userInfo = new UserInfo();
userInfo.getUserInfo(user);

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};