import { Book } from "./Book";
import { Repository } from "./Repository";

export function updateBook(book: Book, updates: Partial<Book>): Book {
  return { ...book, ...updates };
}

export function getReadonlyBooks(repo: Repository<Book>): Readonly<Book[]> {
  return repo.getAll();
}

/*
Пример кода -
const readonlyBooks = getReadonlyBooks(repo);
readonlyBooks.push({ title: "Новая книга", author: "Автор", year: 2025 });
*/