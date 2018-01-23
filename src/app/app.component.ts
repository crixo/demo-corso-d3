import { Component } from '@angular/core';
import { Router, ResolveStart, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //regole valgono solo per il component stesso
  //non usare per posizionare il component - meglio xo' evitare qs approccio di usare qs file per posizionare
  //meglio usare il css per globale sulla root - mettere qui classi che vengono poi implementate nel css su root
  //meglio usare ng-material
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'd3 demo 2';
  public loading: boolean;

  constructor(private router: Router){
    this.router.events.subscribe(event=>{
      if(event instanceof ResolveStart || 
        event instanceof NavigationStart){
          this.loading = true;
      }
      if(event instanceof NavigationEnd || 
        event instanceof NavigationCancel ||
        event instanceof NavigationError){
          this.loading = false;
      }
    })
  }
}