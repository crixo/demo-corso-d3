import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'; // old version
import {HttpClient} from '@angular/common/http'; // new version

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';

import { EventsService } from './events/events.services';
import { AppContextService } from './shared/appcontext.service';

import {BooleanPipe} from './shared/boolean.pipe';
import { DatePickerDirective } from './shared/datepicker.directive';
import { SpeakersComponent } from './speakers/speakers.component';
import { routing } from './app.routes';
import { EventCanActivateGuard } from './events/eventcanactivate.guard';
import { EventCanDeactivateGuard } from './events/eventcandeactivate.guard';
import { ModalComponent } from './shared/modal.component';
import { ModalOpenerDirective } from './shared/modalopener.directive';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent, EventComponent, SpeakersComponent, ModalComponent,
    BooleanPipe,
    DatePickerDirective, ModalOpenerDirective
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [EventsService, AppContextService, EventCanActivateGuard, EventCanDeactivateGuard], // registrato qui diventa un singleton
  bootstrap: [AppComponent] // chi e' il primo component che parte
})
export class AppModule { }
