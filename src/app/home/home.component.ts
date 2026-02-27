import { Component } from '@angular/core';

interface PlacementPartner {
  companyName: string;
  companyLogo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
 
  placementLogo: PlacementPartner[] = [
    { companyName: 'NCPL', companyLogo: 'logoNcpl.png' },
    { companyName: 'OrangeBits', companyLogo: 'orangeBitsLogo.png' },
    { companyName: 'Pixel6', companyLogo: 'pixel6Logo.png' },
    { companyName: 'Selgrm', companyLogo: 'selgumLogo.jpg' },
    { companyName: 'Selgem', companyLogo: 'selgemLogo.png' },
    { companyName: 'Proser Digital', companyLogo: 'proserLogo.jpg' }
  ];
}
