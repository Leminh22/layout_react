export interface Student {
  id: string
  hoTen: string
  email: string
  diem: number
}

export type StudentInput = Omit<Student, 'id'>
