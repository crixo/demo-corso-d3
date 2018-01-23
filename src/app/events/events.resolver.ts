import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventsService } from './events.services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';



@Injectable()
export class EventsResolver implements Resolve<any>  {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getEvents()
        .catch(err => {
            console.log(err);
            this.router.navigateByUrl('notfound')
            return  Observable.of(null);
        });
    }

    constructor(private service: EventsService, private router: Router) { }
}