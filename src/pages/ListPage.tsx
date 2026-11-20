import { useEffect, useState } from 'react'
import type { Book } from '../types/book'
import BookCard from '../components/BookCard'

function ListPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [dangTai, setDangTai] = useState(true)
  const [loi, setLoi] = useState('')

  useEffect(() => {
    async function taiDuLieu() {
      try {
        const res = await fetch('/data/books.json')
        if (!res.ok) {
          throw new Error(`Không tải được dữ liệu (mã ${res.status})`)
        }
        const data: Book[] = await res.json()
        setBooks(data)
      } catch (err) {
        setLoi(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
      } finally {
        setDangTai(false)
      }
    }

    taiDuLieu()
  }, [])

  if (dangTai) {
    return <p className="p-6 text-gray-500">Đang tải dữ liệu...</p>
  }

  if (loi !== '') {
    return <p className="p-6 text-red-600">{loi}</p>
  }

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

export default ListPage
