import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Routing/home/home.component';
import { AboutComponent } from './Components/Routing/about/about.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { StudentsComponent } from './Components/Routing/validator/students/students.component';
import { ValidatorComponent } from './Components/Routing/validator/validator.component';
import { RegisterComponent } from './Components/Routing/validator/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'validator/register', component: RegisterComponent },
  { path: 'validator/validator.component.html', component: ValidatorComponent },
  { path: 'validator/students', component: StudentsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
