import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css'],
})
export class ValidatorComponent {
  //Code TS
  AllStudents: { name: string; age: number; email: string }[] = [];
  DataFromRegister: { name: string; age: number; email: string } = {
    name: '',
    age: 11,
    email: 'example@gmail.com',
  };

  //Executed When Event Fired
  GetData(data: any) {
    // console.log(data);
    this.DataFromRegister = data;
    this.AllStudents.push(this.DataFromRegister);
  }
  constructor() {
    console.log(this.AllStudents);
  }
  @Input() StudentsFromBigParent: {
    name: string;
    age: number;
    email: string;
  }[] = [];
}
