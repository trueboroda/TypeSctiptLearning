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
    function User(id) {
        this._id = id;
    }
    User.prototype.getId = function () {
        return this._id;
    };
    User.prototype.getInfo = function () {
        console.log(this._id);
    };
    return User;
}());
var tom = new User(3);
console.log(tom.getId());
var alice = new User("vsf");
console.log(alice.getId());
function userFactory(type) {
    return new type(1);
}
var user = userFactory(User);
console.log(user);
var UserInfo = (function () {
    function UserInfo() {
    }
    UserInfo.prototype.getUserInfo = function (user) {
        user.getInfo();
    };
    return UserInfo;
}());
var userInfo = new UserInfo();
userInfo.getUserInfo(user);
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map