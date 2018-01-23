import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventsService } from './events.services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';



@Injectable()
export class EventResolver implements Resolve<any>  {

    constructor(private service: EventsService, private router: Router) { 
      
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];


        return this.service.getEvent(id)
        .catch(err => {
            console.log(err);
            this.router.navigateByUrl('notfound')
            return  Observable.of(null);
        });
    }
}