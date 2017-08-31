define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmartWatch = (function () {
        function SmartWatch(model) {
            this._model = model;
        }
        Object.defineProperty(SmartWatch.prototype, "model", {
            get: function () {
                return this._model;
            },
            enumerable: true,
            configurable: true
        });
        return SmartWatch;
    }());
    exports.default = SmartWatch;
});
//# sourceMappingURL=smartwatch.js.map