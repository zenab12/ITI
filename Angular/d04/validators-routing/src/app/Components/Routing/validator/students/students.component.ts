import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  @Input() StudentsFromParent: { name: string; age: number; email: string }[] =
    [];
}
