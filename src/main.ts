import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//qui si possonon fare bootstrap pre-app start e.g dependency injection di componenti che devono essere fatti prima del solito
//qui si puo anche verificare un login esterno all'app angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
