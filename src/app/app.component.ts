import { Component } from '@angular/core';

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
  title = 'd3 demo 2';
}