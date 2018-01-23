import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const securityRouting: ModuleWithProviders = 
    RouterModule.forChild(appRoutes);