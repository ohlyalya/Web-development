"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = updateBook;
exports.getReadonlyBooks = getReadonlyBooks;
function updateBook(book, updates) {
    return __assign(__assign({}, book), updates);
}
function getReadonlyBooks(repo) {
    return repo.getAll();
}
/*
Пример кода -
const readonlyBooks = getReadonlyBooks(repo);
readonlyBooks.push({ title: "Новая книга", author: "Автор", year: 2025 });
*/ 
