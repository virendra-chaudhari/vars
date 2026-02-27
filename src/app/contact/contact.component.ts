import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ═══════════════════════════════════════════════════════════════════════════
// EmailJS Configuration - UPDATE THESE VALUES
// ═══════════════════════════════════════════════════════════════════════════
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (Gmail) and verify your email
// 3. Create an Email Template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone
//    - {{subject}} - Email subject
//    - {{message}} - Email message
// 4. Replace the values below with your actual credentials
// ═══════════════════════════════════════════════════════════════════════════
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // Get from EmailJS Dashboard > Account > API Keys
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Get from EmailJS Dashboard > Email Services
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Get from EmailJS Dashboard > Email Templates
  TO_EMAIL: 'virenchaudhari07@gmail.com'  // Your receiving email
};

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
export class ContactComponent implements OnInit {
  
  // Form state
  formSubmitted = signal(false);
  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  
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

  ngOnInit(): void {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  toggleFaq(index: number): void {
    this.expandedFaq.set(this.expandedFaq() === index ? null : index);
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  async onSubmit(): Promise<void> {
    // Reset error state
    this.submitError.set(null);
    this.isSubmitting.set(true);
    
    // Prepare template parameters
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone: this.formData.phone || 'Not provided',
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: EMAILJS_CONFIG.TO_EMAIL
    };

    try {
      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully!', response);
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
      }, 5000);
    } catch (error: any) {
      console.error('Failed to send email:', error);
      this.isSubmitting.set(false);
      
      // Check if EmailJS is not configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        this.submitError.set('EmailJS not configured. Please set up your EmailJS credentials.');
      } else {
        this.submitError.set('Failed to send message. Please try again or contact us directly.');
      }
    }
  }
}
