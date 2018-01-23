import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SecurityService {

    private loginUrl: string;
    private dataUrl: string;

    constructor(private http: HttpClient) { 
        this.loginUrl = environment.baseUrl + '/security/login';
        this.dataUrl = environment.baseUrl + '/security/data';
    }

    public login(username: string, password: string){
        return this.http.get<any>(this.loginUrl + '?username='+username +'&password='+password);
    }

    public getData(){
        return this.http.get(this.dataUrl)
    }
}