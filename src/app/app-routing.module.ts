import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourcesComponent } from './cources/cources.component';
import { HomeComponent } from './home/home.component';
import { PlacestudentComponent } from './placestudent/placestudent.component';


const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'placestudent', component: PlacestudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
