import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourcesComponent } from './cources/cources.component';
import { ContactComponent } from './contact/contact.component';
import { PlacestudentComponent } from './placestudent/placestudent.component';

@NgModule({
  declarations: [
    // CoreModule,
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourcesComponent,
    ContactComponent,
    PlacestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
