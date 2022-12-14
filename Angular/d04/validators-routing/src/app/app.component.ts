import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'validators-routing';
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
}
