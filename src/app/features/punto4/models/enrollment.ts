export interface Enrollment {
  id: number;
  dni: string;
  price: number;
  studentCategory: number;
  totalPaid: number;
  enrollmentDate: Date;
  email: string;
  course: string;
}
