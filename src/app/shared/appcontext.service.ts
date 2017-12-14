import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppContextService {
    private userName: Subject<string>;

    constructor() {
        this.userName = new Subject<string>();
     }

    public setUserName(userName: string){
        this.userName.next( userName ); //next chiama tutti i subscribers
    }

    public getUserName(): Observable<string>{
        return this.userName;
    }
}