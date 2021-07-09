import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PowerPipe } from './components/home/pipes/power.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    PowerPipe,
    EmployeeComponent,
    NavbarComponent,
    EmployeeinfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // register your routes here 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
