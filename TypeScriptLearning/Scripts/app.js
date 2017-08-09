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
var UserNamespace;
(function (UserNamespace) {
    var User = (function () {
        function User(id, name) {
            this._id = id;
            this._name = name;
        }
        User.prototype.displayInfo = function () {
            console.log("id: " + this._id + "; name: " + this._name);
        };
        return User;
    }());
    UserNamespace.User = User;
    var defaultUser = new User(2, "Tom");
})(UserNamespace || (UserNamespace = {}));
var alice = new UserNamespace.User(4, "Alice");
alice.displayInfo();
(function (UserNamespace) {
    var Employees;
    (function (Employees) {
        var Employee = (function (_super) {
            __extends(Employee, _super);
            function Employee() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Employee;
        }(UserNamespace.User));
        Employees.Employee = Employee;
        var Manager = (function (_super) {
            __extends(Manager, _super);
            function Manager() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Manager;
        }(UserNamespace.User));
        Employees.Manager = Manager;
    })(Employees = UserNamespace.Employees || (UserNamespace.Employees = {}));
})(UserNamespace || (UserNamespace = {}));
var bill = new UserNamespace.Employees.Employee(5, "Bill");
bill.displayInfo();
var Employee = UserNamespace.Employees.Employee;
var em = new Employee(4, "Emma");
em.displayInfo();
var EmNS = UserNamespace.Employees;
var m = new EmNS.Manager(4, "Manager");
m.displayInfo();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map