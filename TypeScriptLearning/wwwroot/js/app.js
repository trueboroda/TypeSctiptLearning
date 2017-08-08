var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Car = (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    };
    Car.prototype.fill = function () {
        console.log("Заправляем машину топливом");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map