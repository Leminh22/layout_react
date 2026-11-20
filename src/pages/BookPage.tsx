import BookCard from "../components/BookCard"
import type { Book } from "../types/book"
import booksData from "../data/books.json"


const books: Book[] = booksData

function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold">Hiệu sách ({books.length} cuốn)</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookPage
