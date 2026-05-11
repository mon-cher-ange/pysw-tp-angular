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
    enrollment.id = this.findNextId();
    this._enrollments.push(enrollment);
  }

  updateEnrollment(enrollment: EnrollmentModel): void {
    let index = this.findIndexById(enrollment.id);
    this._enrollments[index] = enrollment;
  }

  deleteEnrollment(id: number): void {
    let index = this.findIndexById(id);
    this._enrollments.splice(index, 1);
  }

  private findIndexById(id: number): number {
    return this._enrollments.findIndex(e => e.id === id);
  }

  private findNextId(): number {
    return this._enrollments.reduce(
      (max: number, e: EnrollmentModel): number => (e.id > max ? e.id : max), -1
    ) + 1;
  }
}
