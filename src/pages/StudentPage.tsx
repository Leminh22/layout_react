import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { Student } from '../types/student'
import { createStudent, getStudents, deleteStudent, updateStudent } from '../services/studentService'

function StudentPage() {
    const [students, setStudents] = useState<Student[]>([])
    const [dangTai, setDangTai] = useState(true)
    const [loi, setLoi] = useState('')
    const [hoTen, setHoTen] = useState('')
    const [email, setEmail] = useState('')
    const [diem, setDiem] = useState('')

    useEffect(() => {
        async function taiDanhSach() {
            try {
                const data = await getStudents()
                setStudents(data)
            } catch {
                setLoi('Không tải được danh sách. Kiểm tra API đã chạy chưa (npm run api).')
            } finally {
                setDangTai(false)
            }
        }

        taiDanhSach()
    }, [])

    async function handleAdd(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (hoTen.trim() === '' || email.trim() === '' || diem === '') return

        try {
            const svMoi = await createStudent({ hoTen: hoTen.trim(), email: email.trim(), diem: Number(diem) })
            setStudents([...students, svMoi])
            setHoTen('')
            setEmail('')
            setDiem('')
        } catch {
            alert('Thêm sinh viên thất bại.')
        }
    }

    async function handleDelete(id: string) {
        if (!confirm('Xóa sinh viên này?')) return

        try {
            await deleteStudent(id)
            setStudents(students.filter((sv) => sv.id !== id))
        } catch {
            alert('Xóa thất bại.')
        }
    }

    async function handleEditScore(sv: Student) {
        const nhap = prompt(`Điểm mới cho ${sv.hoTen}:`, String(sv.diem))
        if (nhap === null) return

        const diemMoi = Number(nhap)
        if (Number.isNaN(diemMoi)) {
            alert('Điểm không hợp lệ.')
            return
        }

        try {
            const svDaSua = await updateStudent(sv.id, { diem: diemMoi })
            setStudents(students.map((s) => (s.id === sv.id ? svDaSua : s)))
        } catch {
            alert('Sửa thất bại.')
        }
    }

    return (
        <div className="mx-auto max-w-3xl space-y-6 p-6">
            <h1 className="text-2xl font-bold">Quản lý sinh viên</h1>

            {dangTai && (<p className="text-gray-500">Đang tải dữ liệu...</p>)}
            {loi !== '' && (<p className="text-red-600">{loi}</p>)}

            <form onSubmit={handleAdd} className="grid gap-2 sm:grid-cols-4">
                <input value={hoTen} onChange={(e) => setHoTen(e.target.value)} placeholder="Họ tên" className="rounded border px-3 py-2" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded border px-3 py-2" />
                <input value={diem} onChange={(e) => setDiem(e.target.value)} placeholder="Điểm" type="number" step="0.1" className="rounded border px-3 py-2" />
                <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Thêm</button>
            </form>


            <ul className="divide-y rounded-lg border bg-white">
                {students.map((sv) => (
                    <li key={sv.id} className="flex items-center justify-between p-4">
                        <div>
                            <p className="font-semibold">{sv.hoTen}</p>
                            <p className="text-sm text-gray-500">{sv.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold">{sv.diem}</span>
                            <button onClick={() => handleDelete(sv.id)} className="rounded bg-red-600 px-3 py-1 text-sm text-white">
                                Xóa
                            </button>
                            <button onClick={() => handleEditScore(sv)} className="rounded bg-gray-100 px-3 py-1 text-sm">
                                Sửa điểm
                            </button>

                        </div>
                    </li>
                ))}
                {!dangTai && students.length === 0 && loi === '' && (
                    <li className='p-4 text-center text-gray-500'>
                        Chưa có sinh viên nào.
                    </li>
                )}
            </ul>
        </div>
    )

}

export default StudentPage
