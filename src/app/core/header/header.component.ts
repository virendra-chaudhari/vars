import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
    isNavBarFixed = false;
    
    constructor(private activatedRoute: ActivatedRoute) {

    }
    @HostListener("window:scroll", [])
    onWindowScroll() {
        window.pageYOffset < 85 ? this.isNavBarFixed = false : this.isNavBarFixed = true
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }

}
