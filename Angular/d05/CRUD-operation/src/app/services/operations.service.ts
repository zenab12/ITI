import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(public student: HttpClient) {}

  //methods
  getAllStudents() {
    return this.student.get(this.baseUrl);
  }

  getStudentById(id: any) {
    return this.student.get(`${this.baseUrl}/${id}`);
  }

  updateStudentById(id: any, studentObj: any) {
    return this.student.put(`${this.baseUrl}/${id}`, studentObj);
  }
}
