function LoginPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Đăng nhập</h1>
      <input placeholder="Email" className="w-full rounded border px-3 py-2" />
      <input placeholder="Mật khẩu" type="password" className="w-full rounded border px-3 py-2" />
      <button className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
        Đăng nhập
      </button>
    </div>
  )
}

export default LoginPage
