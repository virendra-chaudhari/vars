import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface FormField {
  name: string;
  value: string;
  valid: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  // Form state
  formSubmitted = signal(false);
  isSubmitting = signal(false);
  
  // Form data
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  // Contact information
  contactInfo: ContactInfo[] = [
    {
      icon: 'location',
      title: 'Visit Us',
      content: 'VARS Technosoft, Main Road, Akola, Maharashtra 444001'
    },
    {
      icon: 'phone',
      title: 'Call Us',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: 'email',
      title: 'Email Us',
      content: 'info@varstechnosoft.com',
      link: 'mailto:info@varstechnosoft.com'
    },
    {
      icon: 'clock',
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM'
    }
  ];

  // Social links
  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/vars.technosoft', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
  ];

  // FAQ data
  faqs = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer comprehensive courses in Web Development (Angular, React), Python, Java, Data Science, and more. Each course includes hands-on projects and placement assistance.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We have a dedicated placement cell that helps students with resume building, interview preparation, and connecting them with our 50+ hiring partners.'
    },
    {
      question: 'What is the duration of courses?',
      answer: 'Course durations vary from 3 to 6 months depending on the program. We also offer flexible weekend batches for working professionals.'
    }
  ];

  expandedFaq = signal<number | null>(null);

  toggleFaq(index: number): void {
    this.expandedFaq.set(this.expandedFaq() === index ? null : index);
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  onSubmit(): void {
    this.isSubmitting.set(true);
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.formSubmitted.set(true);
      
      // Reset form after showing success
      setTimeout(() => {
        this.formSubmitted.set(false);
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
      }, 3000);
    }, 1500);
  }
}
