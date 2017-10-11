import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CarListComponent } from "./components/car-list.component";
import { CarAddComponent } from "./components/car-add.component";
import { CarEditComponent } from "./components/car-edit.component";
import { LoginComponent } from "./components/login.component";
import { RegistrationComponent } from "./components/registration.component";



const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'cars',
        component: CarListComponent
    },    
    {
        path: 'cars/add',
        component: CarAddComponent
    },
    {
        path: 'cars/editCar/:id',
        component: CarEditComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },    
];

export const AppRoutingProviders: any[] = [];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
