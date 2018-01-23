import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent,
        children: [
            {path:'', redirectTo: 'personaldata', pathMatch: 'full'}
        ]
    }
];

export const securityRouting: ModuleWithProviders = 
    RouterModule.forChild(appRoutes);