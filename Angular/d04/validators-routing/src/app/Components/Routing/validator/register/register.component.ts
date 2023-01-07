import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message = ''; //to set message for age with required or not valid
  NameRequired = ''; // to set message with required
  EmailMessage = ''; // to set message with required or email is not valid
  student: { name: any; age: any; email: any } = {
    name: 'userName',
    age: 11,
    email: 'example@gmail.com',
  };
  Name = null;
  Age = null;
  Email = null;
  DataRegister = this.student;
  RegisterationForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [Validators.max(20), Validators.min(11)]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  get NameValid() {
    if (this.RegisterationForm.value['name'] == null) {
      this.NameRequired = 'required';
    }
    return (
      this.RegisterationForm.controls['name'].valid &&
      this.RegisterationForm.value['name'] != null
    );
  }

  get AgeValid() {
    if (this.RegisterationForm.value['age'] == null) {
      this.message = 'required';
    } else if (!this.RegisterationForm.controls['age'].valid) {
      this.message = 'student age should be between [11,20]';
    }
    return (
      this.RegisterationForm.controls['age'].valid &&
      this.RegisterationForm.value['age'] != null
    );
  }

  get EmailValid() {
    if (this.RegisterationForm.value['email'] == null) {
      this.EmailMessage = 'required';
      console.log(this.RegisterationForm.value['email']);
    } else if (this.RegisterationForm.controls['email'].valid) {
      this.EmailMessage =
        'email is not correct please use email like this example@gmail.com';
    }
    return (
      this.RegisterationForm.controls['email'].valid &&
      this.RegisterationForm.value['email'] != null
    );
  }

  @Output() register = new EventEmitter();

  Add() {
    if (this.AgeValid && this.NameValid && this.EmailValid) {
      this.DataRegister = {
        name: this.RegisterationForm.value['name'],
        age: this.RegisterationForm.value['age'],
        email: this.RegisterationForm.value['email'],
      };
      this.register.emit(this.DataRegister);
      console.log(this.DataRegister);
    }
    this.Name = null;
    this.Age = null;
    this.Email = null;
  }
}
