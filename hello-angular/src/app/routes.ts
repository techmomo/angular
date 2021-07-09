import { Routes } from "@angular/router";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeeinfoComponent } from "./components/employeeinfo/employeeinfo.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routes:Routes=[
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'employees',
        component: EmployeeComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'employees/info/:name',
        component: EmployeeinfoComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]