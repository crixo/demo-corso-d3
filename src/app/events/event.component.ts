import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import {AppContextService} from '../shared/appcontext.service';

@Component({
    selector: 'app-event',
    templateUrl: 'event.component.html'
})

export class EventComponent implements OnInit {

    @Input()
    currentEvent: Event;//public property w/ gettter and setter currentEvent?.name->? testa se obj is null

    @Output()
    cancelled: EventEmitter<any>;

    @Output()
    onSaved: EventEmitter<any>; 

    @ViewChild("varToRefTheModel")
    nameInput: NgModel;

    @ViewChild("frm")
    form: NgForm;

    constructor(private appContext: AppContextService) { 
        this.cancelled = new EventEmitter();
        this.onSaved = new EventEmitter();
    }

    cancel(){
        //alert('cancel');
        console.log(this.nameInput);
        console.log(this.form);
        this.appContext.setUserName('pippo');
        this.cancelled.emit();

    }

    save(){
        this.onSaved.emit();
    }    

    ngOnInit() { }
}