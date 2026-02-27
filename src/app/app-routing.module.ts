import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlacestudentComponent } from './placestudent/placestudent.component';
import { WebDtailsComponent } from './web-dtails/web-dtails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'web/:id', component: WebDtailsComponent },
  // Lazy load standalone component for better performance
  { 
    path: 'cources', 
    loadComponent: () => import('./cources/cources.component').then(m => m.CourcesComponent)
  },
  { path: 'placement', component: PlacestudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
