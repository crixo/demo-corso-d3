import { Event } from "./events.model";
import { Injectable } from "@angular/core";
import {Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class EventsService{

    private _apiUrl: string;

    constructor(private http: Http){
        this._apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';
    }

    getEvents() : Observable<Event[]>{
        return this.http.get(this._apiUrl)
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

}