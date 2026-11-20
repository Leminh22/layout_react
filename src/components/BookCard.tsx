import type { Book } from '../types/book'

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps) {
  return (
    <div className={`rounded-lg border bg-white p-4 shadow-sm ${book.conHang ? '' : 'opacity-60'}`}>
      <span className="text-xs font-medium text-blue-600">{book.theLoai}</span>
      <h3 className="mt-1 font-semibold">{book.tenSach}</h3>
      <p className="text-sm text-gray-500">{book.tacGia}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-semibold text-red-600">
          {book.gia.toLocaleString('vi-VN')} ₫
        </span>
        {book.conHang ? (
          <span className="text-xs text-green-600">Còn hàng</span>
        ) : (
          <span className="text-xs text-gray-500">Hết hàng</span>
        )}
      </div>
    </div>
  )
}

export default BookCard
