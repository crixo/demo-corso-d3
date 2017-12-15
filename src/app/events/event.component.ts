import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import {AppContextService} from '../shared/appcontext.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from "./events.model";
import { EventsService } from './events.services';

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

    constructor(
        private service: EventsService,
        private appContext: AppContextService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { 
            
        //const id = this.activatedRoute.snapshot.params['id'];
        const id = this.activatedRoute.params.subscribe(params => {if(params['id']){
            this.service.getEvent(params['id']).subscribe(
                args=>this.currentEvent=args,
                err => console.log(err)); 
        }});
        console.log(id);

        this.currentEvent = new Event();

        // if(id){
        //     this.service.getEvent(id).subscribe(
        //         args=>this.currentEvent=args,
        //         err => console.log(err));    
        // }

        this.cancelled = new EventEmitter();
        this.onSaved = new EventEmitter();
    }

    cancel(){
        //alert('cancel');
        console.log(this.nameInput);
        console.log(this.form);
        this.appContext.setUserName('pippo');
        this.cancelled.emit();
        this.router.navigateByUrl('events');

    }

    save(){
        //this.onSaved.emit();
        if(this.currentEvent.id === undefined){
            this.service.create(this.currentEvent).subscribe(
                args=>{
                    this.currentEvent=args; 
                    console.log(`event ${this.currentEvent.id} created`);
                    this.router.navigateByUrl('events');
                },
                err => console.log(err)); 
        }else{
            this.service.update(this.currentEvent).subscribe(
                args=>{
                    this.currentEvent=args; 
                    console.log(`event ${this.currentEvent.id} updated`);
                    this.router.navigateByUrl('events');
                },
                err => console.log(err)); 
        }    
    }    

    ngOnInit() { }
}