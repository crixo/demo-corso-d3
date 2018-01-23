import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SecurityService {

    private loginUrl: string;

    constructor(private http: HttpClient) { 
        this.loginUrl = environment.baseUrl + '/security/login';
    }

    public login(username: string, password: string){
        return this.http.get<boolean>(this.loginUrl + '?username='+username +'&password='+password);
    }
}