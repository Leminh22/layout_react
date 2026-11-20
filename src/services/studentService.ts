import api from './api'
import type { Student, StudentInput } from '../types/student'

export async function getStudents(): Promise<Student[]> {
  const res = await api.get<Student[]>('/students')
  return res.data
}

export async function createStudent(sv: StudentInput): Promise<Student> {
  const res = await api.post<Student>('/students', sv)
  return res.data
}

export async function updateStudent(id: string, thayDoi: Partial<StudentInput>): Promise<Student> {
  const res = await api.patch<Student>(`/students/${id}`, thayDoi)
  return res.data
}

export async function deleteStudent(id: string): Promise<void> {
  await api.delete(`/students/${id}`)
}
