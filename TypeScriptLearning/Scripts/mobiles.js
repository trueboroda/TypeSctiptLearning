define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Smartphone = (function () {
        function Smartphone() {
        }
        Smartphone.prototype.displayInfo = function () {
            console.log("Смартфон. Модель: " + this.model + " производитель: " + this.company);
        };
        return Smartphone;
    }());
    exports.Smartphone = Smartphone;
    var Tablet = (function () {
        function Tablet() {
        }
        Tablet.prototype.displayInfo = function () {
            console.log("Планшет. Модель: " + this.model + " производитель: " + this.company);
        };
        return Tablet;
    }());
    exports.Tablet = Tablet;
});
//# sourceMappingURL=mobiles.js.map