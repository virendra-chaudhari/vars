import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Params, RoutesRecognized } from '@angular/router';
    
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})

export class HeaderComponent {

    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

    }
    ngOnDestroy() {

    }
}
