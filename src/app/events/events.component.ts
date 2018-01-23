import { Component } from '@angular/core';
import { Event } from "./events.model";
import { EventsService } from './events.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-events',
    templateUrl: 'events.component.html',
    //providers: [EventsService]//dipendenza creata ogni volta che crea il component
})

export class EventsComponent {
    eventList: Event[];
    formVisible: boolean;
    selectedEvent: Event;
    title: string;
    subTitle: string;

    private _service: EventsService;

    constructor(service: EventsService, private router: Router, private activatedRoute: ActivatedRoute) { 
        this._service = service;

        this.formVisible = false;
        //this.loadEvents();
        this.eventList = this.activatedRoute.snapshot.data['events'];

        this.title = activatedRoute.snapshot.data.title;
        this.subTitle = activatedRoute.snapshot.data.subTitle;
    }

    create(){
        //alert('create');
        let newEvent = new Event();
        this.selectedEvent = newEvent;
        //this.showForm();
        this.router.navigateByUrl('event');
    }

    edit(event: Event){
        //alert('edit' + JSON.stringify(event));
        //this.eventList.push(event);
        var eventToEdit = JSON.parse(JSON.stringify(event));
        this.selectedEvent = eventToEdit;//event;
        //this.showForm();
        this.router.navigateByUrl('event/' + event.id);
    }

    delete(event: Event){
        let events = [...this.eventList.filter(e => !(e.id===this.selectedEvent.id))];
        this.eventList = events;
    }

    showForm(){
        this.formVisible = true;
    }    

    saveForm(){
        console.log(this.selectedEvent.id);
        if(this.selectedEvent.id === undefined){
            this.selectedEvent.id=this.eventList.length+1;
            this.eventList.push(this.selectedEvent);
        }else{
            var eventsWithoutSelected = this.eventList.filter(e => !(e.id===this.selectedEvent.id));
            console.log(eventsWithoutSelected)
            let events = [this.selectedEvent, ...eventsWithoutSelected];
            events.sort((a,b) => {
                return (a.id>b.id? 1 :-1);
            });
            this.eventList = events;
        }
        this.formVisible = false;
    }   

    hideForm(){
        this.formVisible = false;
    }  

    loadEvents(){
        this._service.getEvents().subscribe(
            args=>this.eventList=args,
            err => console.log(err));
    }
}