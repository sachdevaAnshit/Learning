import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { employeesComponent } from './employee/employees.component';
import { addEditEmployeeComponent } from './employee/employeesAddEdit.component';
import { employeeDetailsComponent } from './employee/employeesDetails.component';

const appRoutes: Routes = [
  { path: 'employees', component: employeesComponent },
  { path: 'add', component: addEditEmployeeComponent },
  { path: 'edit/:index', component: addEditEmployeeComponent },
  { path: 'details/:index', component: employeeDetailsComponent },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    employeesComponent,
    addEditEmployeeComponent,
    employeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }