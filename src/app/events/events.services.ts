import { Event } from "./events.model";
import { Injectable } from "@angular/core";
import {Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';




@Injectable()
export class EventsService{

    private _apiUrl: string;

    constructor(private http: Http){
        this._apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';
    }

    getEvent(id: number) : Observable<Event>{
        return this.http.get(this._apiUrl + '/' + id)
                    .map( (res: Response) => res.json() );
    }

    getEvents() : Observable<Event[]>{
        return this.http.get(this._apiUrl)
                    .catch(err => {throw (err) })
                    .map( (res: Response) => res.json() );
        // return [
        //     {
        //         id: 1, 
        //         name:'Angular 2 lab', 
        //         description:'descr', 
        //         startDate:'2018-01-10', 
        //         endDate:'2018-01-15', 
        //         location: 'location 1',
        //         visible:true
        //     },
        //     {
        //         id: 2, 
        //         name:'Angular 2 lab 2', 
        //         description:'descr 2', 
        //         startDate:'2018-02-10', 
        //         endDate:'2018-02-15', 
        //         location: 'location 1',
        //         visible:true}
        // ];
    }

    create(event: Event) : Observable<Event>{
        return this.http.post(this._apiUrl, event)
                    .map( (res: Response) => res.json() );
    }    

    update(event: Event) : Observable<Event>{
        return this.http.put(this._apiUrl + '/' + event.id, event)
                    .map( (res: Response) => res.json() );
    }       

}