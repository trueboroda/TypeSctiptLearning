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

class Animal {
    feed():void {
        console.log("кормим животное");
    }
}

class Transport {
    speed: number=0;
    move(): void {
        if (this.speed == 0) {
            console.log("Стоим на месте");
        }
        else if (this.speed > 0) {
            console.log("Перемещаемся со скоростью " + this.speed + " км/ч");
        }
    }
}

class Horse implements Animal, Transport {
    speed: number=0;
    feed: () => void;
    move: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Horse, [Animal, Transport]);

let pony: Horse = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();

window.onload = () => {
	var el = document.getElementById('content');
	var greeter = new Greeter(el);
	greeter.start();
};