import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../security.service';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public loginFormGroup: FormGroup;

    constructor(private service: SecurityService) { }

    ngOnInit() { 
        const username = new FormControl('', [Validators.required, Validators.minLength(6), this.invalidWords]);
        const password = new FormControl('', Validators.required);
        this.loginFormGroup = new FormGroup({
            username: username,
            password: password
        });
    }

    private invalidWords(control: FormControl){
        return control.value!= null && control.value.includes('stupido')? {'invalidWords': 'stupido'} : null;
    }

    login(){
        console.log(this.loginFormGroup);
        this.service.login(
            this.loginFormGroup.controls.username.value,
            this.loginFormGroup.controls.password.value)
            .subscribe(result=>{
                localStorage.setItem('token', result.token);
                console.log(result)});

        this.service.getData()
            .subscribe(result=> console.log(result));
    }
}