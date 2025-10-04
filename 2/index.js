"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LibraryBook_1 = require("./types/LibraryBook");
var book1 = new LibraryBook_1.LibraryBook({
    title: "Преступление и наказание",
    author: "Ф. М. Достоевский",
    year: 1866,
});
var book2 = new LibraryBook_1.LibraryBook({
    title: "Мастер и Маргарита",
    author: "М. А. Булгаков",
    year: 1967,
});
book1.borrow("Анна");
book2.borrow("Иван");
