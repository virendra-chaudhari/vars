import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebDtailsComponent } from './web-dtails/web-dtails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Lazy load standalone components for better performance
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  { path: 'web/:id', component: WebDtailsComponent },
  { 
    path: 'cources', 
    loadComponent: () => import('./cources/cources.component').then(m => m.CourcesComponent)
  },
  { 
    path: 'course/:id', 
    loadComponent: () => import('./course-details/course-details.component').then(m => m.CourseDetailsComponent)
  },
  { 
    path: 'placement', 
    loadComponent: () => import('./placestudent/placestudent.component').then(m => m.PlacestudentComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
