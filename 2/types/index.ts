import { LibraryBook } from "./LibraryBook";

const book1 = new LibraryBook({
  title: "Преступление и наказание",
  author: "Ф. М. Достоевский",
  year: 1866,
});

const book2 = new LibraryBook({
  title: "Мастер и Маргарита",
  author: "М. А. Булгаков",
  year: 1967,
});

book1.borrow("Анна");
book2.borrow("Иван");