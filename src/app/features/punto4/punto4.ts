import { Component, inject, OnInit } from '@angular/core';
import { Enrollment as EnrollmentService } from './services/enrollment';
import { Enrollment as EnrollmentModel } from './models/enrollment';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-punto4',
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})
export class Punto4 implements OnInit {
  private enrollmentService: EnrollmentService = inject(EnrollmentService);
  nextEnrollmentId: number = 1;
  formEnrollment: EnrollmentModel = this.getEmptyFormEnrollment();
  enrollmentData: EnrollmentModel[] = [];

  ngOnInit(): void {
    this.refreshData();
  }

  private getEmptyFormEnrollment(): EnrollmentModel {
    return {
      id: 0,
      dni: '',
      price: 0,
      studentCategory: 0,
      totalPaid: 0,
      enrollmentDate: new Date(),
      email: '',
      course: '',
    };
  }

  calculatePayment(): void {
    if (this.formEnrollment.price > 0 && this.formEnrollment.studentCategory > 0) {
      let discount: number = 0;
      const category = Number(this.formEnrollment.studentCategory);
      if (category === 1) {
        discount = 0.35;
      }
      if (category === 2) {
        discount = 0.5;
      }
      this.formEnrollment.totalPaid = this.formEnrollment.price * (1 - discount);
    } else {
      this.formEnrollment.totalPaid = 0;
    }
  }

  registerEnrollment(): void {
    this.formEnrollment.id = this.nextEnrollmentId++;
    this.enrollmentService.addEnrollment({ ...this.formEnrollment });
    this.refreshData();
    this.formReset();
  }

  formReset(): void {
    this.formEnrollment = this.getEmptyFormEnrollment();
  }

  private refreshData() {
    this.enrollmentData = this.enrollmentService.getAllEnrollments();
  }

  get getSummary() {
    return {
      students: this.enrollmentData.filter((e) => Number(e.studentCategory) === 1).length,
      graduates: this.enrollmentData.filter((e) => Number(e.studentCategory) === 2).length,
      private: this.enrollmentData.filter((e) => Number(e.studentCategory) === 3).length,
      totalPaid: this.enrollmentData.reduce(
        (accumulator, enrollment) => accumulator + enrollment.totalPaid,
        0,
      ),
    };
  }

  getCategoryName(category: number): string {
    const names: { 1: string; 2: string; 3: string } = {
      1: 'Estudiante',
      2: 'Egresado',
      3: 'Particular',
    };
    // @ts-ignore
    return names[category] || 'Desconocida';
  }
}
