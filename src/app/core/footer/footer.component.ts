import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent {

  constructor(private router: Router) {
      
  }
  ngOnDestroy() {

  }
}
