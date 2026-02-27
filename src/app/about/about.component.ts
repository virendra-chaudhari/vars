import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  expandedFaq = signal<number | null>(null);

  stats: Stat[] = [
    { value: '500+', label: 'Students Trained' },
    { value: '50+', label: 'Partner Companies' },
    { value: '6+', label: 'Years Experience' },
    { value: '95%', label: 'Placement Rate' }
  ];

  features: Feature[] = [
    {
      icon: 'expert',
      title: 'Expert Trainers',
      description: 'All our trainers are working professionals with 6+ years of industry experience.'
    },
    {
      icon: 'practical',
      title: '50% Theory & Practical',
      description: 'Industry-based practical scenarios combined with theoretical knowledge for complete learning.'
    },
    {
      icon: 'flexible',
      title: 'Flexible Batch Times',
      description: 'Choose your own training schedule with weekend batches available on Saturday & Sunday.'
    },
    {
      icon: 'affordable',
      title: 'Affordable Fees',
      description: 'Quality training at competitive prices with flexible payment options available.'
    },
    {
      icon: 'certification',
      title: 'Global Certification',
      description: 'Prepare for global certification exams to ensure job opportunities in MNCs.'
    },
    {
      icon: 'placement',
      title: 'Placement Assistance',
      description: 'Dedicated placement support to help you land your dream job in top companies.'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Virendra Chaudhari',
      role: 'Founder & Lead Instructor',
      image: 'assets/img/virendra.jpg',
      description: 'Expert in modern web technologies with a passion for teaching and mentoring developers.'
    },
    {
      name: 'Jennifer',
      role: 'Senior Developer',
      image: 'assets/img/team2.jpg',
      description: 'Specialized in React and Node.js with extensive industry experience.'
    },
    {
      name: 'Christean',
      role: 'Technical Lead',
      image: 'assets/img/team3.jpg',
      description: 'Full-stack developer focused on scalable web applications.'
    },
    {
      name: 'Kerinele Rase',
      role: 'Project Manager',
      image: 'assets/img/team4.jpg',
      description: 'Ensuring smooth operations and excellent student experience.'
    }
  ];

  toggleFaq(index: number): void {
    this.expandedFaq.update(current => current === index ? null : index);
  }
}
