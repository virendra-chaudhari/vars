import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// AboutComponent is now standalone - imported directly in routing
// CourcesComponent is now standalone - imported directly in routing
// ContactComponent is now standalone - imported directly in routing
// PlacestudentComponent is now standalone - imported directly in routing
// HeaderComponent is now standalone - imported in CoreModule
// FooterComponent is now standalone - imported in CoreModule
import { WebDtailsComponent } from './web-dtails/web-dtails.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent - now standalone
    // CourcesComponent - now standalone
    // ContactComponent - now standalone
    // PlacestudentComponent - now standalone
    WebDtailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
