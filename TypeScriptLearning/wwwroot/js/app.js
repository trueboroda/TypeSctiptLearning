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
var User = (function () {
    function User(name, age) {
        this._name = name;
        this._year = this.setYear(age);
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.displayYear = function () {
        console.log("Год рождения: " + this._year);
    };
    User.prototype.displayName = function () {
        console.log("name: " + this._name);
    };
    User.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return User;
}());
var tom = new User("Tom", 24);
tom.displayName();
tom.displayYear();
tom.name = "Tonu";
tom.displayName();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map