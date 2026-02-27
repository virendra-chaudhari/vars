import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PlacedStudent {
  name: string;
  company: string;
  image: string;
  role?: string;
  testimonial?: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-placestudent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './placestudent.component.html',
  styleUrl: './placestudent.component.scss'
})
export class PlacestudentComponent {
  
  stats: Stat[] = [
    { value: '500+', label: 'Students Placed' },
    { value: '50+', label: 'Hiring Partners' },
    { value: '95%', label: 'Placement Rate' },
    { value: '8L+', label: 'Average Package' }
  ];

  students: PlacedStudent[] = [
    {
      name: 'Sachin Machale',
      company: 'NCPL Pvt. Ltd',
      image: 'assets/img/sachin1.jpg',
      role: 'Frontend Developer',
      testimonial: 'The practical training at VARS helped me crack my dream job.'
    },
    {
      name: 'Rani Patil',
      company: 'Pixel6 Web Studio',
      image: 'assets/img/rani.jpg',
      role: 'Full Stack Developer',
      testimonial: 'Excellent curriculum and supportive mentors.'
    },
    {
      name: 'Mukesh Dama',
      company: 'NCPL Pvt. Ltd',
      image: 'assets/img/mukesh.jpg',
      role: 'Software Engineer',
      testimonial: 'Real-world projects gave me the confidence I needed.'
    },
    {
      name: 'Akshay Gathe',
      company: 'Pixel6 Web Studio Pvt. Ltd',
      image: 'assets/img/akshay.jpg',
      role: 'React Developer',
      testimonial: 'The best decision I made for my career.'
    },
    {
      name: 'Suraj Ovhal',
      company: 'Proser Digital Solution',
      image: 'assets/img/suraj1.jpg',
      role: 'Angular Developer',
      testimonial: 'Industry-focused training that actually works.'
    },
    {
      name: 'Rohini Nimbane',
      company: 'Salgem Info Ptd. Ltd.',
      image: 'assets/img/rohini.jpg',
      role: 'UI Developer',
      testimonial: 'From beginner to professional in just 6 months.'
    },
    {
      name: 'Tejaswini Uddan',
      company: 'Orange Bits India Software Ptd. Ltd',
      image: 'assets/img/tejaswini.jpg',
      role: 'Web Developer',
      testimonial: 'Great learning environment and placement support.'
    }
  ];

  partnerCompanies = [
    'NCPL Pvt. Ltd',
    'Pixel6 Web Studio',
    'Proser Digital Solution',
    'Salgem Info',
    'Orange Bits India',
    'Tech Mahindra',
    'Infosys',
    'TCS'
  ];
}
