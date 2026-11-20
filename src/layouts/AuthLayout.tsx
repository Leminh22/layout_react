import { Link, Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-4">
      <Link to="/" className="mb-6 text-2xl font-bold text-blue-600">
        Học React
      </Link>
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <Outlet />
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuthLayout
