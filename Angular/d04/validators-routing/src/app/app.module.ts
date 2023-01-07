import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Routing/home/home.component';
import { AboutComponent } from './Components/Routing/about/about.component';
import { ValidatorComponent } from './Components/Routing/validator/validator.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { StudentsComponent } from './Components/Routing/validator/students/students.component';
import { RegisterComponent } from './Components/Routing/validator/register/register.component';
import { NavbarComponent } from './Components/Routing/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ValidatorComponent,
    RegisterComponent,
    ErrorComponent,
    StudentsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
