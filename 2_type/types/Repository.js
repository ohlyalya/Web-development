"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository(initialItems) {
        if (initialItems === void 0) { initialItems = []; }
        this.items = initialItems;
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
exports.Repository = Repository;
