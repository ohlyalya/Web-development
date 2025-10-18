import { LibraryBook } from "./types/LibraryBook";
import { Repository } from "./types/Repository";
import { updateBook, getReadonlyBooks } from "./types/utils";
import { Book } from "./types/Book";

const book1: Book = { title: "Преступление и наказание", author: "Ф. М. Достоевский", year: 1866 };
const book2: Book = { title: "Мастер и Маргарита", author: "М. А. Булгаков", year: 1967 };

const repo = new Repository<Book>([book1, book2]);

const newBook: Book = { title: "Война и мир", author: "Л. Н. Толстой", year: 1869 };
repo.add(newBook);

console.log("Все книги:", repo.getAll());

const updatedBook = updateBook(book2, { year: 1968 });
console.log("Обновлённая книга:", updatedBook);

const readonlyBooks = getReadonlyBooks(repo);
console.log("Книги только для чтения:", readonlyBooks);

// readonlyBooks.push({ title: "Новая", author: "Автор", year: 2025 });