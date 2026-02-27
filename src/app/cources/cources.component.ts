import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Course {
  id: number;
  routeId: string;
  buttonLabel: string;
  courseName: string;
  details: string;
  syllabus: string;
  modalBody: string;
  icon?: string;
  // Enhanced properties
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  highlights: string[];
  isBestseller: boolean;
  isNew: boolean;
  lastUpdated: string;
  category: string;
}

@Component({
  selector: 'app-cources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cources.component.html',
  styleUrl: './cources.component.scss'
})
export class CourcesComponent implements OnInit, OnDestroy {
  // Using Angular Signals for reactive state management
  searchQuery = signal('');
  selectedCategory = signal<string>('all');
  selectedLevel = signal<string>('all');
  sortBy = signal<string>('popular');
  
  // Animated counter values
  animatedStats = signal({
    students: 0,
    courses: 0,
    instructors: 0,
    rating: 0
  });

  categories = [
    { id: 'all', name: 'All Courses', count: 8 },
    { id: 'frontend', name: 'Frontend', count: 4 },
    { id: 'backend', name: 'Backend', count: 2 },
    { id: 'fullstack', name: 'Full Stack', count: 2 }
  ];

  levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  private animationInterval: any;

  // Course data with comprehensive real-world information
  courseDetails = signal<Course[]>([
    {
      id: 1,
      routeId: 'angular',
      buttonLabel: 'View Details',
      courseName: "Angular 17+ Complete Guide",
      details: "Master Angular 17+ with standalone components, signals, SSR, and modern best practices. Build enterprise-grade applications used by Fortune 500 companies including Google, Microsoft, and IBM.",
      syllabus: "Components, Services, Routing, Forms, HTTP Client, RxJS, State Management, Testing",
      modalBody: 'Complete Angular Development Course',
      icon: '🅰️',
      price: 12999,
      originalPrice: 24999,
      rating: 4.8,
      reviewCount: 2847,
      studentCount: 15420,
      duration: '12 weeks',
      level: 'Intermediate',
      instructor: {
        name: 'Virendra Chaudhari',
        avatar: 'VC',
        title: 'Senior Angular Developer at TCS'
      },
      highlights: ['Signals & Standalone Components', 'SSR with Angular Universal', 'NgRx State Management', 'Real-World Projects'],
      isBestseller: true,
      isNew: false,
      lastUpdated: 'January 2026',
      category: 'frontend'
    },
    {
      id: 2,
      routeId: 'react',
      buttonLabel: 'View Details',
      courseName: "React 19 - The Complete Guide",
      details: "Learn React 19 from scratch including Server Components, Actions, and the latest hooks. Build modern SPAs and full-stack applications with Next.js 15. Trusted by developers at Meta, Airbnb, and Netflix.",
      syllabus: "JSX, Components, Props, State, Hooks, Context, Redux Toolkit, React Router, Next.js",
      modalBody: 'Complete React Development Course',
      icon: '⚛️',
      price: 11999,
      originalPrice: 22999,
      rating: 4.9,
      reviewCount: 4521,
      studentCount: 28650,
      duration: '14 weeks',
      level: 'Beginner',
      instructor: {
        name: 'Priya Sharma',
        avatar: 'PS',
        title: 'Ex-Meta Frontend Engineer'
      },
      highlights: ['React 19 Server Components', 'Next.js 15 Full Stack', 'Redux Toolkit & Zustand', 'TypeScript Integration'],
      isBestseller: true,
      isNew: true,
      lastUpdated: 'February 2026',
      category: 'frontend'
    },
    {
      id: 3,
      routeId: 'node',
      buttonLabel: 'View Details',
      courseName: "Node.js + Express - Backend Mastery",
      details: "Build scalable REST APIs and microservices with Node.js 22+, Express 5, and MongoDB. Learn authentication, caching, deployment, and production best practices used at Uber and LinkedIn.",
      syllabus: "Core Modules, Express.js 5, REST APIs, JWT Auth, MongoDB, Redis, WebSockets, Docker",
      modalBody: 'Complete Node.js Backend Course',
      icon: '🟢',
      price: 13999,
      originalPrice: 26999,
      rating: 4.7,
      reviewCount: 1956,
      studentCount: 12840,
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: {
        name: 'Rahul Mehta',
        avatar: 'RM',
        title: 'Backend Architect at Flipkart'
      },
      highlights: ['REST & GraphQL APIs', 'MongoDB & PostgreSQL', 'Microservices Architecture', 'AWS Deployment'],
      isBestseller: false,
      isNew: false,
      lastUpdated: 'December 2025',
      category: 'backend'
    },
    {
      id: 4,
      routeId: 'javascript',
      buttonLabel: 'View Details',
      courseName: "JavaScript - Zero to Hero 2026",
      details: "Complete JavaScript mastery from fundamentals to advanced concepts. Learn ES2024+ features, async patterns, and build 20+ real projects. Perfect foundation for any web development career.",
      syllabus: "ES2024+, DOM Manipulation, Async/Await, Promises, Modules, Classes, Closures, Design Patterns",
      modalBody: 'Complete JavaScript Mastery Course',
      icon: '🟨',
      price: 8999,
      originalPrice: 17999,
      rating: 4.9,
      reviewCount: 6234,
      studentCount: 42150,
      duration: '8 weeks',
      level: 'Beginner',
      instructor: {
        name: 'Amit Kumar',
        avatar: 'AK',
        title: 'JavaScript Educator & Author'
      },
      highlights: ['ES2024+ Latest Features', '20+ Hands-on Projects', 'Design Patterns', 'Interview Preparation'],
      isBestseller: true,
      isNew: false,
      lastUpdated: 'January 2026',
      category: 'frontend'
    },
    {
      id: 5,
      routeId: 'typescript',
      buttonLabel: 'View Details',
      courseName: "TypeScript 5.x Professional",
      details: "Deep dive into TypeScript 5.x with decorators, generics, utility types, and advanced patterns. Build type-safe applications that scale. Essential for Angular, React, and Node.js developers.",
      syllabus: "Types, Interfaces, Generics, Decorators, Utility Types, Conditional Types, Advanced Patterns",
      modalBody: 'Complete TypeScript Course',
      icon: '🔷',
      price: 9999,
      originalPrice: 19999,
      rating: 4.8,
      reviewCount: 1845,
      studentCount: 9820,
      duration: '6 weeks',
      level: 'Intermediate',
      instructor: {
        name: 'Sneha Patel',
        avatar: 'SP',
        title: 'TypeScript Specialist at Infosys'
      },
      highlights: ['TypeScript 5.x Features', 'Advanced Generic Patterns', 'Type Guards & Narrowing', 'Real-World Architecture'],
      isBestseller: false,
      isNew: true,
      lastUpdated: 'February 2026',
      category: 'frontend'
    },
    {
      id: 6,
      routeId: 'tailwind',
      buttonLabel: 'View Details',
      courseName: "Tailwind CSS 4 - Modern UI Design",
      details: "Create stunning, responsive interfaces with Tailwind CSS 4. Learn the utility-first approach, custom design systems, and build beautiful UIs 10x faster. Used by Shopify, GitHub, and OpenAI.",
      syllabus: "Utility Classes, Responsive Design, Customization, Components, Dark Mode, Animations, Plugins",
      modalBody: 'Complete Tailwind CSS Course',
      icon: '🎨',
      price: 6999,
      originalPrice: 13999,
      rating: 4.7,
      reviewCount: 2156,
      studentCount: 18620,
      duration: '4 weeks',
      level: 'Beginner',
      instructor: {
        name: 'Kavita Reddy',
        avatar: 'KR',
        title: 'UI/UX Designer at Razorpay'
      },
      highlights: ['Tailwind CSS 4 Features', 'Custom Design Systems', 'Component Libraries', 'Animation & Transitions'],
      isBestseller: true,
      isNew: false,
      lastUpdated: 'January 2026',
      category: 'frontend'
    },
    {
      id: 7,
      routeId: 'mern',
      buttonLabel: 'View Details',
      courseName: "MERN Stack - Full Stack Development",
      details: "Become a complete full-stack developer with MongoDB, Express, React 19, and Node.js. Build production-ready applications from scratch including authentication, payments, and deployment.",
      syllabus: "MongoDB, Express.js, React 19, Node.js, Redux, JWT, Stripe, AWS/Vercel Deployment",
      modalBody: 'Complete MERN Stack Course',
      icon: '🚀',
      price: 19999,
      originalPrice: 39999,
      rating: 4.9,
      reviewCount: 3421,
      studentCount: 21540,
      duration: '20 weeks',
      level: 'Intermediate',
      instructor: {
        name: 'Vikram Singh',
        avatar: 'VS',
        title: 'Full Stack Lead at Swiggy'
      },
      highlights: ['Complete Full Stack Journey', 'Real E-commerce Project', 'Payment Integration', 'Cloud Deployment'],
      isBestseller: true,
      isNew: false,
      lastUpdated: 'February 2026',
      category: 'fullstack'
    },
    {
      id: 8,
      routeId: 'python',
      buttonLabel: 'View Details',
      courseName: "Python for Backend Development",
      details: "Master Python 3.12+ with Django and FastAPI for building robust backend systems. Learn databases, authentication, and REST APIs. Python is the #1 language for both AI and web development.",
      syllabus: "Python 3.12+, Django 5, FastAPI, PostgreSQL, SQLAlchemy, Celery, Docker, Testing",
      modalBody: 'Complete Python Backend Course',
      icon: '🐍',
      price: 14999,
      originalPrice: 29999,
      rating: 4.8,
      reviewCount: 2867,
      studentCount: 16890,
      duration: '12 weeks',
      level: 'Beginner',
      instructor: {
        name: 'Deepak Joshi',
        avatar: 'DJ',
        title: 'Python Developer at Google'
      },
      highlights: ['Django 5 & FastAPI', 'Database Design', 'API Development', 'Async Programming'],
      isBestseller: false,
      isNew: true,
      lastUpdated: 'February 2026',
      category: 'backend'
    }
  ]);

  ngOnInit(): void {
    this.animateStats();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private animateStats(): void {
    const targets = { students: 165930, courses: 8, instructors: 12, rating: 4.8 };
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    this.animationInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.animatedStats.set({
        students: Math.floor(targets.students * easeOut),
        courses: Math.floor(targets.courses * easeOut),
        instructors: Math.floor(targets.instructors * easeOut),
        rating: Math.round(targets.rating * easeOut * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(this.animationInterval);
        this.animatedStats.set(targets);
      }
    }, duration / steps);
  }

  // Computed value for filtered courses with category and level filters
  filteredCourses = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();
    const level = this.selectedLevel();
    const sort = this.sortBy();
    
    let courses = this.courseDetails();
    
    // Filter by search query
    if (query) {
      courses = courses.filter(course =>
        course.courseName.toLowerCase().includes(query) ||
        course.details.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (category !== 'all') {
      courses = courses.filter(course => course.category === category);
    }
    
    // Filter by level
    if (level !== 'all') {
      courses = courses.filter(course => course.level === level);
    }
    
    // Sort courses
    switch (sort) {
      case 'popular':
        courses = [...courses].sort((a, b) => b.studentCount - a.studentCount);
        break;
      case 'rating':
        courses = [...courses].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        courses = [...courses].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-low':
        courses = [...courses].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        courses = [...courses].sort((a, b) => b.price - a.price);
        break;
    }
    
    return courses;
  });

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory.set(category);
  }

  onLevelChange(level: string): void {
    this.selectedLevel.set(level);
  }

  onSortChange(sort: string): void {
    this.sortBy.set(sort);
  }

  formatStudentCount(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K+';
    }
    return count.toString();
  }

  formatPrice(price: number): string {
    return '₹' + price.toLocaleString('en-IN');
  }

  calculateDiscount(original: number, current: number): number {
    return Math.round(((original - current) / original) * 100);
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0));
  }
}
