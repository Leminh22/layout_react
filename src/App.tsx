import { Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import BookPage from './pages/BookPage'
import ListPage from './pages/ListPage'
import StudentPage from './pages/StudentPage'
import RegisterPage from './pages/RegisterPage'



function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="gioi-thieu" element={<AboutPage />} />
        <Route path="lien-he" element={<ContactPage />} />
        <Route path="danh-sach" element={<BookPage />} />
        <Route path="thu-vien" element={<ListPage />} />
        <Route path="danh-sach-sinh-vien" element={<StudentPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="dang-nhap" element={<LoginPage />} />
        <Route path="dang-ky" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
