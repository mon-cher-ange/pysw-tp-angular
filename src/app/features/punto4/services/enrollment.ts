import { Injectable } from '@angular/core';
import { Enrollment as EnrollmentModel } from '../models/enrollment';

@Injectable({
  providedIn: 'root',
})
export class Enrollment {
  private _enrollments: EnrollmentModel[] = [];

  getAllEnrollments(): EnrollmentModel[] {
    return this._enrollments;
  }

  addEnrollment(enrollment: EnrollmentModel): void {
    console.log(enrollment.enrollmentDate);
    this._enrollments.push(enrollment);
  }

  updateEnrollment(index: number, enrollment: EnrollmentModel): void {
    this._enrollments[index] = enrollment;
  }

  deleteEnrollment(index: number): void {
    this._enrollments.splice(index, 1);
  }
}
