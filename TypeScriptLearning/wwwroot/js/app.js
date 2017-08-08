var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function User(userName) {
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        console.log("Имя: " + this.name);
    };
    User.prototype.getClassName = function () {
        return "User";
    };
    return User;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(company, name) {
        var _this = _super.call(this, name) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        console.log(this.name + " работает в компании " + this.company);
    };
    Employee.prototype.getClassName = function () {
        return "Employee";
    };
    return Employee;
}(User));
var tom = new User("Tom");
tom.getInfo();
console.log(tom.getClassName());
var alice = new Employee("Microsoft", "Alice");
alice.getInfo();
console.log(alice.getClassName());
var bill = new Employee("Google", "Bill");
bill.getInfo();
console.log(bill.getClassName());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map