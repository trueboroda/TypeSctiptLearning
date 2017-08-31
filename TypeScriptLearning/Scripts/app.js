define(["require", "exports", "./mobiles"], function (require, exports, mobiles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    console.log('hello');
    var iphone = new mobiles_1.Smartphone();
    iphone.company = "Apple";
    iphone.model = "iPhone 7";
    iphone.displayInfo();
    window.onload = function () {
        var el = document.getElementById('content');
        var greeter = new Greeter(el);
        greeter.start();
    };
});
//# sourceMappingURL=app.js.map