//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {AppContextService} from '../shared/appcontext.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent{// implements OnInit {
    appName: string;

    constructor(appContext: AppContextService) { 
        appContext.getUserName().subscribe(username => this.appName = username);
    }

    //ngOnInit() { }
}