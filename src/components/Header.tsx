import { NavLink } from 'react-router'

function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-semibold underline underline-offset-4' : 'hover:underline'

  return (
    <header className="bg-blue-600 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <span className="text-lg font-bold">Học React</span>
        <nav className="flex gap-6">
          <NavLink to="/" end className={linkClass}>Trang chủ</NavLink>
          <NavLink to="/gioi-thieu" className={linkClass}>Giới thiệu</NavLink>
          <NavLink to="/lien-he" className={linkClass}>Liên hệ</NavLink>
          <NavLink to="/dang-nhap" className={linkClass}>Đăng nhập</NavLink>
          <NavLink to="/danh-sach" className={linkClass}>Book</NavLink>
          <NavLink to="/thu-vien" className={linkClass}>Thư Viện</NavLink>
          <NavLink to="/danh-sach-sinh-vien" className={linkClass}>Danh Sách Sinh Viên</NavLink>
          <NavLink to="/dang-ky" className={linkClass}>Đăng ký</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
