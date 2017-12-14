import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';//old version
import {HttpClient} from '@angular/common/http';//new version

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';

import { EventsService } from './events/events.services';
import { AppContextService } from './shared/appcontext.service';

import {BooleanPipe} from './shared/boolean.pipe'


@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent, EventComponent,
    BooleanPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [EventsService, AppContextService],//registrato qui diventa un singleton
  bootstrap: [AppComponent]//chi e' il primo component che parte
})
export class AppModule { }
