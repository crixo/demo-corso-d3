import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EventComponent } from './events/event.component';
import { EventCanActivateGuard } from './events/eventcanactivate.guard';
import { EventCanDeactivateGuard } from './events/eventcandeactivate.guard';
import { EventsResolver } from './events/events.resolver';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventResolver } from './events/event.resolver';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
    },    
    {
        path: 'events',
        component: EventsComponent,
        data: { title: 'Lista eventi', subtitle: 'subtitle...' },
        resolve: {events: EventsResolver}
        //canActivate: [EventCanActivateGuard, EventCanDeactivateGuard]
    },
    {
        path: 'event',
        component: EventComponent
    },   
    {
        path: 'event/:id',
        component: EventComponent,
        resolve: {event: EventResolver}
    },         
    {
        path: 'speakers',
        component: SpeakersComponent
    },        
    {
        path: 'notfound',
        component: NotfoundComponent
    },  
];

// ho bisogno di una factory per generare il module in quanto qs richiede dei paramteri (routes) per essere costruito
// x qs ragione non posso farne imports in app.module.ts come per gli altri
export const routing: ModuleWithProviders = 
    RouterModule.forRoot(appRoutes);