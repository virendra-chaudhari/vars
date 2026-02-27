import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SocialLink {
  id: number;
  name: string;
  icon: string;
  url: string;
}

interface QuickLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: QuickLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/cources' },
    { label: 'Placements', path: '/placement' },
    { label: 'Contact', path: '/contact' }
  ];

  courses = [
    'Angular',
    'React JS',
    'Node JS',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS'
  ];

  socialLinks: SocialLink[] = [
    { id: 1, name: 'Twitter', icon: 'twitter', url: 'https://www.twitter.com' },
    { id: 2, name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/vars.technosoft' },
    { id: 3, name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com' },
    { id: 4, name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com' },
    { id: 5, name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/' }
  ];

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
