import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { securityRouting } from './security.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityService } from './security.service';
import { LogInterceptor } from './log.interceptor';
import { SecurityInterceptor } from './security.interceptor';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalDataComponent } from './registration/personaldata.component';


@NgModule({
    imports: [securityRouting, ReactiveFormsModule, HttpClientModule, RegistrationComponent, PersonalDataComponent],
    exports: [],//posso anche non esportare LoginComponent se ci acceddo via route
    declarations: [LoginComponent],
    //applicato solo ai servizi dentro questo modulo(security), non per gli altri moduli
    //per averlo su tutti metterlo in appmodule
    providers: [
        SecurityService, 
        {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true}
    ],
})
export class SecurityModule { }
