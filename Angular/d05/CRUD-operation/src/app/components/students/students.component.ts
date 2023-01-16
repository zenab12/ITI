import { OperationsService } from './../../services/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any;

  constructor(public myOperations: OperationsService) {}
  ngOnInit(): void {
    this.myOperations.getAllStudents().subscribe(
      {
        next: (res) => {
          this.students = res;
        },
        error: (err) => {
          console.log(err);
        },
      }
      // (res) => {
      //   console.log(res);
      // },
      // (err) => {
      //   console.log(err);
      // }
    );
  }
}
