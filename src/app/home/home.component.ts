import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';

interface PlacementPartner {
  companyName: string;
  companyLogo: string;
  website?: string;
}

interface FeaturedCourse {
  id: string;
  name: string;
  icon: string;
  description: string;
  students: number;
  rating: number;
  duration: string;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  
  // Animated counter values
  animatedStats = signal<{students: number; companies: number; mentors: number; success: number}>({
    students: 0,
    companies: 0,
    mentors: 0,
    success: 0
  });

  // Testimonial carousel
  currentTestimonialIndex = signal(0);
  private testimonialInterval: any;
  private statsAnimationInterval: any;

  stats: Stat[] = [
    { value: 15420, suffix: '+', label: 'Students Placed', icon: '🎓' },
    { value: 85, suffix: '+', label: 'Partner Companies', icon: '🏢' },
    { value: 12, suffix: '+', label: 'Expert Mentors', icon: '👨‍🏫' },
    { value: 97, suffix: '%', label: 'Success Rate', icon: '📈' }
  ];

  featuredCourses: FeaturedCourse[] = [
    {
      id: 'react',
      name: 'React 19 Complete Guide',
      icon: '⚛️',
      description: 'Build modern SPAs with React 19 Server Components, Actions, and Next.js 15',
      students: 28650,
      rating: 4.9,
      duration: '14 weeks',
      color: '#61dafb'
    },
    {
      id: 'angular',
      name: 'Angular 17+ Mastery',
      icon: '🅰️',
      description: 'Enterprise-grade applications with standalone components and signals',
      students: 15420,
      rating: 4.8,
      duration: '12 weeks',
      color: '#dd0031'
    },
    {
      id: 'javascript',
      name: 'JavaScript Zero to Hero',
      icon: '🟨',
      description: 'Complete JS mastery from fundamentals to ES2024+ features',
      students: 42150,
      rating: 4.9,
      duration: '8 weeks',
      color: '#f7df1e'
    },
    {
      id: 'mern',
      name: 'MERN Stack Development',
      icon: '🚀',
      description: 'Full-stack mastery with MongoDB, Express, React & Node.js',
      students: 21540,
      rating: 4.9,
      duration: '20 weeks',
      color: '#00d8ff'
    }
  ];
 
  placementLogo: PlacementPartner[] = [
    { companyName: 'TCS', companyLogo: 'tcs-logo.png', website: 'https://www.tcs.com' },
    { companyName: 'Infosys', companyLogo: 'infosys-logo.png', website: 'https://www.infosys.com' },
    { companyName: 'Wipro', companyLogo: 'wipro-logo.png', website: 'https://www.wipro.com' },
    { companyName: 'Tech Mahindra', companyLogo: 'techmahindra-logo.png', website: 'https://www.techmahindra.com' },
    { companyName: 'Accenture', companyLogo: 'accenture-logo.png', website: 'https://www.accenture.com' },
    { companyName: 'Capgemini', companyLogo: 'capgemini-logo.png', website: 'https://www.capgemini.com' },
    { companyName: 'Cognizant', companyLogo: 'cognizant-logo.png', website: 'https://www.cognizant.com' },
    { companyName: 'HCL', companyLogo: 'hcl-logo.png', website: 'https://www.hcltech.com' },
    { companyName: 'L&T Infotech', companyLogo: 'lti-logo.png', website: 'https://www.ltimindtree.com' },
    { companyName: 'Mindtree', companyLogo: 'mindtree-logo.png', website: 'https://www.ltimindtree.com' },
    { companyName: 'Persistent', companyLogo: 'persistent-logo.png', website: 'https://www.persistent.com' },
    { companyName: 'Zensar', companyLogo: 'zensar-logo.png', website: 'https://www.zensar.com' }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sachin Machale',
      role: 'Senior Frontend Developer',
      company: 'TCS Digital',
      avatar: 'SM',
      quote: 'VARS transformed my career completely. The hands-on approach with real projects prepared me for actual industry challenges. Within 3 months of completing the course, I landed my dream job at TCS Digital with a 180% salary hike!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Kulkarni',
      role: 'Full Stack Developer',
      company: 'Infosys',
      avatar: 'PK',
      quote: 'The MERN stack course was incredibly comprehensive. The mentors are actual industry professionals who share real-world insights. The placement support was excellent - I had 4 job offers to choose from!',
      rating: 5
    },
    {
      id: 3,
      name: 'Rohini Nimbane',
      role: 'UI/UX Developer',
      company: 'Accenture',
      avatar: 'RN',
      quote: 'Coming from a non-tech background, I was skeptical about switching careers. But VARS made the transition smooth with their structured curriculum and constant support. Now I\'m working at Accenture earning 12 LPA!',
      rating: 5
    },
    {
      id: 4,
      name: 'Amit Deshmukh',
      role: 'React Developer',
      company: 'Capgemini',
      avatar: 'AD',
      quote: 'The React course at VARS is top-notch. They cover everything from basics to advanced patterns like Server Components. The mock interviews prepared me well - I cleared 6 out of 7 interviews!',
      rating: 5
    },
    {
      id: 5,
      name: 'Neha Sharma',
      role: 'Angular Developer',
      company: 'Tech Mahindra',
      avatar: 'NS',
      quote: 'What sets VARS apart is their focus on building real projects. By the end of the course, I had a portfolio of 5 production-grade applications. This made all the difference in my interviews.',
      rating: 5
    }
  ];

  currentTestimonial = computed(() => this.testimonials[this.currentTestimonialIndex()]);

  ngOnInit(): void {
    this.animateStats();
    this.startTestimonialCarousel();
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    if (this.statsAnimationInterval) {
      clearInterval(this.statsAnimationInterval);
    }
  }

  private animateStats(): void {
    const targets = { students: 15420, companies: 85, mentors: 12, success: 97 };
    const duration = 2500;
    const steps = 80;
    let currentStep = 0;

    this.statsAnimationInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.animatedStats.set({
        students: Math.floor(targets.students * easeOut),
        companies: Math.floor(targets.companies * easeOut),
        mentors: Math.floor(targets.mentors * easeOut),
        success: Math.floor(targets.success * easeOut)
      });

      if (currentStep >= steps) {
        clearInterval(this.statsAnimationInterval);
        this.animatedStats.set(targets);
      }
    }, duration / steps);
  }

  private startTestimonialCarousel(): void {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 6000);
  }

  nextTestimonial(): void {
    const next = (this.currentTestimonialIndex() + 1) % this.testimonials.length;
    this.currentTestimonialIndex.set(next);
  }

  prevTestimonial(): void {
    const prev = this.currentTestimonialIndex() === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonialIndex() - 1;
    this.currentTestimonialIndex.set(prev);
  }

  goToTestimonial(index: number): void {
    this.currentTestimonialIndex.set(index);
    // Reset the auto-rotation timer
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
      this.startTestimonialCarousel();
    }
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    return num.toString() + '+';
  }
}
