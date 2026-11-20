import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormValues {
  hoTen: string
  email: string
  matKhau: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

function kiemTra(values: FormValues): FormErrors {
  const loi: FormErrors = {}
  if (values.hoTen.trim().length < 2) loi.hoTen = 'Họ tên ít nhất 2 ký tự'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) loi.email = 'Email không hợp lệ'
  if (values.matKhau.length < 6) loi.matKhau = 'Mật khẩu ít nhất 6 ký tự'
  return loi
}

const inputClass = 'w-full rounded border px-3 py-2'

function ManualForm() {
  const [values, setValues] = useState<FormValues>({ hoTen: '', email: '', matKhau: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const loi = kiemTra(values)
    setErrors(loi)
    if (Object.keys(loi).length > 0) return
    alert(`Đăng ký thành công: ${values.hoTen}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <input name="hoTen" value={values.hoTen} onChange={handleChange} placeholder="Họ tên" className={inputClass} />
        {errors.hoTen && <p className="mt-1 text-sm text-red-600">{errors.hoTen}</p>}
      </div>
      <div>
        <input name="email" value={values.email} onChange={handleChange} placeholder="Email" className={inputClass} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <input name="matKhau" type="password" value={values.matKhau} onChange={handleChange} placeholder="Mật khẩu" className={inputClass} />
        {errors.matKhau && <p className="mt-1 text-sm text-red-600">{errors.matKhau}</p>}
      </div>
      <button className="w-full rounded bg-blue-600 py-2 text-white">Đăng ký</button>
    </form>
  )
}

export default ManualForm
