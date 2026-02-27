import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

interface Module {
  title: string;
  topics: string[];
  duration: string;
  videoCount: number;
}

interface CourseFeature {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  role: string;
}

interface Instructor {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
  bio: string;
  expertise: string[];
}

interface CourseDetail {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  description: string;
  longDescription: string;
  duration: string;
  level: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  lastUpdated: string;
  language: string;
  certificate: boolean;
  lifetimeAccess: boolean;
  prerequisites: string[];
  features: CourseFeature[];
  modules: Module[];
  skills: string[];
  careerPaths: string[];
  projects: string[];
  tools: string[];
  instructor: Instructor;
  faqs: FAQ[];
  reviews: Review[];
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  courseId = signal<string>('');
  
  private coursesData: Record<string, CourseDetail> = {
    'angular': {
      id: 'angular',
      name: 'Angular 17+ Masterclass',
      tagline: 'Build enterprise-grade web applications with the latest Angular features',
      icon: '🅰️',
      color: '#DD0031',
      description: 'Master Angular, the powerful TypeScript-based framework by Google for building scalable, maintainable web applications.',
      longDescription: `Angular is a comprehensive platform for building modern web applications. Developed and maintained by Google, it provides a complete solution for front-end development with features like Signals, standalone components, two-way data binding, dependency injection, and a powerful CLI. Angular uses TypeScript, which adds static typing to JavaScript, making your code more robust and maintainable. With Angular, you can build everything from small single-page applications to large enterprise systems used by millions of users.`,
      duration: '12 Weeks',
      level: 'Intermediate',
      price: 14999,
      originalPrice: 29999,
      rating: 4.8,
      reviewCount: 2847,
      studentCount: 15420,
      lastUpdated: 'January 2024',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['Basic HTML & CSS', 'JavaScript fundamentals', 'Understanding of TypeScript basics'],
      instructor: {
        name: 'Virendra Singh',
        title: 'Senior Angular Developer & Tech Lead',
        avatar: 'VS',
        rating: 4.9,
        students: 45000,
        courses: 8,
        bio: 'Virendra has been building enterprise Angular applications for 8+ years. Previously worked at Google and Microsoft, now dedicated to training the next generation of Angular developers.',
        expertise: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Firebase']
      },
      features: [
        { icon: '🏗️', title: 'Component Architecture', description: 'Build reusable, modular UI components with signals' },
        { icon: '🔄', title: 'Reactive Programming', description: 'Master RxJS and reactive patterns with Angular Signals' },
        { icon: '🛡️', title: 'Type Safety', description: 'Write robust code with TypeScript strict mode' },
        { icon: '⚡', title: 'Performance', description: 'Optimize with lazy loading, SSR & AOT compilation' }
      ],
      modules: [
        {
          title: 'Angular Fundamentals',
          topics: ['Angular CLI & Project Setup', 'Standalone Components', 'Data Binding & Directives', 'Pipes & Transformations'],
          duration: '2 weeks',
          videoCount: 24
        },
        {
          title: 'Angular Signals & State',
          topics: ['Introduction to Signals', 'Computed Signals', 'Effects & Signal-based State', 'Converting from RxJS'],
          duration: '1.5 weeks',
          videoCount: 18
        },
        {
          title: 'Components & Communication',
          topics: ['Input/Output with Signals', 'ViewChild & ContentChild', 'Component Lifecycle Hooks', 'Dynamic Components'],
          duration: '2 weeks',
          videoCount: 22
        },
        {
          title: 'Services & Dependency Injection',
          topics: ['Creating Services', 'Dependency Injection System', 'Hierarchical Injectors', 'Singleton vs Multi-instance'],
          duration: '1.5 weeks',
          videoCount: 16
        },
        {
          title: 'Routing & Navigation',
          topics: ['Router Configuration', 'Route Guards', 'Lazy Loading Modules', 'Resolver & Navigation Events'],
          duration: '1.5 weeks',
          videoCount: 18
        },
        {
          title: 'Forms & Validation',
          topics: ['Template-driven Forms', 'Reactive Forms', 'Custom Validators', 'Form Arrays & Groups'],
          duration: '2 weeks',
          videoCount: 20
        },
        {
          title: 'HTTP & State Management',
          topics: ['HttpClient Module', 'Interceptors', 'Error Handling', 'NgRx State Management'],
          duration: '2 weeks',
          videoCount: 22
        },
        {
          title: 'Testing & Deployment',
          topics: ['Unit Testing with Jasmine', 'E2E Testing with Cypress', 'Build Optimization', 'Deployment to Firebase'],
          duration: '1 week',
          videoCount: 14
        }
      ],
      skills: ['Component-based Architecture', 'Angular Signals', 'TypeScript', 'RxJS Observables', 'Angular CLI', 'Unit Testing', 'State Management'],
      careerPaths: ['Angular Developer', 'Front-end Engineer', 'Full-stack Developer', 'Enterprise Application Developer'],
      projects: ['Task Management App', 'E-commerce Platform', 'Real-time Chat Application', 'Admin Dashboard with Analytics'],
      tools: ['VS Code', 'Angular CLI', 'Chrome DevTools', 'Augury', 'Git', 'Firebase'],
      faqs: [
        {
          question: 'Is this course suitable for beginners?',
          answer: 'This course is designed for developers with basic JavaScript knowledge. If you know HTML, CSS, and JavaScript fundamentals, you can start this course. We cover TypeScript basics in the first few modules.'
        },
        {
          question: 'Will I get a certificate after completing the course?',
          answer: 'Yes! Upon successful completion of the course and all assignments, you will receive a verified certificate that you can share on LinkedIn and add to your resume.'
        },
        {
          question: 'What if I get stuck on something?',
          answer: 'You have access to our dedicated Discord community where instructors and peers help each other. We also have weekly live Q&A sessions and you can always reach out via email for personalized support.'
        },
        {
          question: 'Is the content up-to-date with Angular 17?',
          answer: 'Absolutely! This course covers Angular 17+ features including Signals, standalone components, new control flow syntax (@if, @for), and the latest best practices. We update the content with every major Angular release.'
        },
        {
          question: 'Do I get lifetime access?',
          answer: 'Yes, once enrolled you get lifetime access to all course materials, including any future updates. You also get access to the private community forever.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Rahul Sharma',
          avatar: 'RS',
          rating: 5,
          date: '2 weeks ago',
          comment: 'This is hands down the best Angular course I\'ve taken. The instructor explains complex concepts like RxJS and state management in such a simple way. Got placed at TCS within 2 months of completing this!',
          helpful: 127,
          role: 'Software Engineer at TCS'
        },
        {
          id: 2,
          name: 'Priya Patel',
          avatar: 'PP',
          rating: 5,
          date: '1 month ago',
          comment: 'The Angular Signals section was exactly what I needed. Very well structured course with practical projects. The support from the instructor is amazing!',
          helpful: 89,
          role: 'Frontend Developer at Infosys'
        },
        {
          id: 3,
          name: 'Amit Kumar',
          avatar: 'AK',
          rating: 4,
          date: '3 weeks ago',
          comment: 'Great course overall. The projects are industry-relevant and the code quality taught is excellent. Would love more advanced NgRx content though.',
          helpful: 56,
          role: 'Angular Developer at Wipro'
        }
      ]
    },
    'react': {
      id: 'react',
      name: 'React 19 Complete Guide',
      tagline: 'Build modern user interfaces with React 19 and Next.js',
      icon: '⚛️',
      color: '#61DAFB',
      description: 'Learn React 19, the most popular JavaScript library for building dynamic, interactive user interfaces.',
      longDescription: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Created by Meta, it has become the most widely-used front-end library in the industry. This course covers React 19's new features including Server Components, Actions, and improved performance. You'll learn component-based architecture, hooks, state management with Redux Toolkit and Zustand, and build production-ready applications.`,
      duration: '10 Weeks',
      level: 'Intermediate',
      price: 12999,
      originalPrice: 24999,
      rating: 4.9,
      reviewCount: 3156,
      studentCount: 18500,
      lastUpdated: 'February 2024',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['HTML & CSS proficiency', 'JavaScript ES6+ knowledge', 'Basic programming concepts'],
      instructor: {
        name: 'Amit Verma',
        title: 'Principal Frontend Engineer',
        avatar: 'AV',
        rating: 4.9,
        students: 52000,
        courses: 6,
        bio: 'Amit has 10+ years of experience in frontend development. He worked at Facebook and Netflix before becoming a full-time educator. His teaching style focuses on practical, real-world applications.',
        expertise: ['React', 'Next.js', 'Redux', 'TypeScript', 'GraphQL']
      },
      features: [
        { icon: '🎯', title: 'Virtual DOM', description: 'Efficient rendering with virtual DOM diffing' },
        { icon: '🪝', title: 'React Hooks', description: 'Modern state management with hooks' },
        { icon: '🧩', title: 'Component Library', description: 'Access to vast ecosystem of components' },
        { icon: '📱', title: 'React Native Ready', description: 'Skills transfer to mobile development' }
      ],
      modules: [
        {
          title: 'React Fundamentals',
          topics: ['JSX Syntax', 'Components & Props', 'State & Lifecycle', 'Event Handling'],
          duration: '2 weeks',
          videoCount: 22
        },
        {
          title: 'React Hooks Deep Dive',
          topics: ['useState & useEffect', 'useContext & useReducer', 'useMemo & useCallback', 'Custom Hooks'],
          duration: '2 weeks',
          videoCount: 20
        },
        {
          title: 'State Management',
          topics: ['Context API', 'Redux Toolkit', 'Zustand', 'React Query / TanStack Query'],
          duration: '2 weeks',
          videoCount: 18
        },
        {
          title: 'Routing & Navigation',
          topics: ['React Router v6', 'Dynamic Routing', 'Protected Routes', 'Navigation Patterns'],
          duration: '1 week',
          videoCount: 12
        },
        {
          title: 'Styling & UI',
          topics: ['CSS Modules', 'Styled Components', 'Tailwind with React', 'Shadcn UI'],
          duration: '1 week',
          videoCount: 14
        },
        {
          title: 'Advanced Patterns',
          topics: ['Higher-Order Components', 'Render Props', 'Compound Components', 'Performance Optimization'],
          duration: '2 weeks',
          videoCount: 16
        }
      ],
      skills: ['JSX', 'React Hooks', 'State Management', 'React Router', 'Redux', 'API Integration', 'Testing with Vitest'],
      careerPaths: ['React Developer', 'Front-end Developer', 'Full-stack Developer', 'UI Engineer'],
      projects: ['Social Media Feed', 'Movie Database App', 'Shopping Cart with Payments', 'Weather Dashboard'],
      tools: ['VS Code', 'Vite', 'React DevTools', 'Redux DevTools', 'Vercel'],
      faqs: [
        {
          question: 'Does this course cover React 19 features?',
          answer: 'Yes! This course is fully updated for React 19, covering Server Components, Actions, use() hook, and all the latest features and best practices.'
        },
        {
          question: 'Should I learn JavaScript before React?',
          answer: 'Yes, you should have a good understanding of JavaScript ES6+ features like arrow functions, destructuring, and async/await before starting this course.'
        },
        {
          question: 'Is Next.js covered in this course?',
          answer: 'We introduce Next.js fundamentals in the deployment section. For a complete Next.js guide, we recommend our dedicated Next.js course after completing this one.'
        },
        {
          question: 'What projects will I build?',
          answer: 'You\'ll build 4 major projects: a social media feed, movie database with TMDB API, full shopping cart with Stripe payments, and a weather dashboard.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Sneha Gupta',
          avatar: 'SG',
          rating: 5,
          date: '1 week ago',
          comment: 'Excellent course! The React 19 content is fantastic. I especially loved the Redux Toolkit section. Now working at a startup in Bangalore!',
          helpful: 98,
          role: 'React Developer at Swiggy'
        },
        {
          id: 2,
          name: 'Vikram Singh',
          avatar: 'VS',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Best React course in Hindi! The projects are amazing and the instructor explains everything so clearly. Highly recommend!',
          helpful: 134,
          role: 'Frontend Engineer at Flipkart'
        },
        {
          id: 3,
          name: 'Deepak Rajan',
          avatar: 'DR',
          rating: 4,
          date: '1 month ago',
          comment: 'Great course with practical projects. The state management section could be a bit more detailed, but overall excellent value.',
          helpful: 67,
          role: 'Software Developer at Razorpay'
        }
      ]
    },
    'node': {
      id: 'node',
      name: 'Node.js Backend Mastery',
      tagline: 'Build scalable server-side applications and REST APIs',
      icon: '🟢',
      color: '#339933',
      description: 'Master Node.js to build fast, scalable network applications and RESTful APIs.',
      longDescription: `Node.js is a powerful JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript on the server. This comprehensive course covers everything from fundamentals to advanced concepts like microservices, GraphQL, and real-time applications with WebSockets. You'll learn Express.js, database integration with MongoDB and PostgreSQL, authentication, and deployment using Docker and AWS.`,
      duration: '10 Weeks',
      level: 'Intermediate',
      price: 11999,
      originalPrice: 22999,
      rating: 4.7,
      reviewCount: 2234,
      studentCount: 12800,
      lastUpdated: 'January 2024',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['JavaScript proficiency', 'Basic understanding of HTTP', 'Command line basics'],
      instructor: {
        name: 'Rajesh Kumar',
        title: 'Backend Architect & DevOps Lead',
        avatar: 'RK',
        rating: 4.8,
        students: 38000,
        courses: 5,
        bio: 'Rajesh has architected backend systems for companies like Amazon and Paytm. His expertise in scalable systems and microservices makes complex concepts easy to understand.',
        expertise: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS']
      },
      features: [
        { icon: '⚡', title: 'Non-blocking I/O', description: 'Handle thousands of concurrent connections' },
        { icon: '📦', title: 'NPM Ecosystem', description: 'Access to millions of packages' },
        { icon: '🔌', title: 'Full-stack JS', description: 'Use JavaScript everywhere' },
        { icon: '🚀', title: 'High Performance', description: 'Built on Chrome V8 engine' }
      ],
      modules: [
        {
          title: 'Node.js Fundamentals',
          topics: ['Node.js Architecture', 'Modules & NPM', 'File System Operations', 'Event Loop & Async'],
          duration: '2 weeks',
          videoCount: 20
        },
        {
          title: 'Express.js Framework',
          topics: ['Routing & Middleware', 'Request/Response Handling', 'Error Handling', 'Template Engines'],
          duration: '2 weeks',
          videoCount: 18
        },
        {
          title: 'Database Integration',
          topics: ['MongoDB with Mongoose', 'PostgreSQL with Prisma', 'Redis Caching', 'Database Design'],
          duration: '2 weeks',
          videoCount: 22
        },
        {
          title: 'Authentication & Security',
          topics: ['JWT Authentication', 'OAuth 2.0 with Google/GitHub', 'Password Hashing', 'Security Best Practices'],
          duration: '1.5 weeks',
          videoCount: 16
        },
        {
          title: 'RESTful API Design',
          topics: ['REST Principles', 'API Versioning', 'Swagger Documentation', 'Rate Limiting'],
          duration: '1.5 weeks',
          videoCount: 14
        },
        {
          title: 'Advanced Topics',
          topics: ['WebSockets & Real-time', 'Microservices', 'Docker & AWS Deployment', 'Testing APIs'],
          duration: '1 week',
          videoCount: 12
        }
      ],
      skills: ['Express.js', 'MongoDB', 'REST API Design', 'Authentication', 'WebSockets', 'Testing', 'Docker Deployment'],
      careerPaths: ['Backend Developer', 'API Developer', 'Full-stack Developer', 'DevOps Engineer'],
      projects: ['RESTful Blog API', 'Real-time Chat Server', 'E-commerce Backend', 'Job Portal API'],
      tools: ['VS Code', 'Postman', 'MongoDB Compass', 'Docker', 'Git', 'AWS'],
      faqs: [
        {
          question: 'Will I learn to build real APIs?',
          answer: 'Yes! You\'ll build 4 complete production-ready APIs including authentication, payments integration, and real-time features with WebSockets.'
        },
        {
          question: 'Is Docker covered?',
          answer: 'Yes, we have a dedicated module on Docker containerization and deployment to AWS using ECS. You\'ll learn to containerize your Node.js apps.'
        },
        {
          question: 'Which databases will I learn?',
          answer: 'We cover MongoDB (NoSQL) with Mongoose and PostgreSQL (SQL) with Prisma ORM. You\'ll learn when to use each type of database.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Karthik M',
          avatar: 'KM',
          rating: 5,
          date: '2 weeks ago',
          comment: 'This course helped me understand backend development from scratch. The authentication and deployment sections are gold. Got 3 job offers after completing this!',
          helpful: 156,
          role: 'Backend Developer at Zoho'
        },
        {
          id: 2,
          name: 'Ananya Reddy',
          avatar: 'AR',
          rating: 5,
          date: '1 month ago',
          comment: 'Amazing course! The real-time chat project with WebSockets was my favorite. Now I can build any kind of API confidently.',
          helpful: 89,
          role: 'Full Stack Developer'
        }
      ]
    },
    'javascript': {
      id: 'javascript',
      name: 'JavaScript - Zero to Hero',
      tagline: 'Master the language that powers the web',
      icon: '🟨',
      color: '#F7DF1E',
      description: 'Master JavaScript from fundamentals to advanced concepts and become a proficient web developer.',
      longDescription: `JavaScript is the world's most popular programming language and the backbone of modern web development. This comprehensive course takes you from absolute basics to advanced concepts like closures, prototypes, async programming, and modern ES2024 features. You'll build real projects, understand how JavaScript works under the hood, and be ready to learn any JavaScript framework.`,
      duration: '8 Weeks',
      level: 'Beginner',
      price: 7999,
      originalPrice: 15999,
      rating: 4.9,
      reviewCount: 4521,
      studentCount: 28400,
      lastUpdated: 'February 2024',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['Basic computer skills', 'HTML & CSS fundamentals', 'Logical thinking'],
      instructor: {
        name: 'Priya Sharma',
        title: 'JavaScript Educator & Web Developer',
        avatar: 'PS',
        rating: 4.9,
        students: 75000,
        courses: 4,
        bio: 'Priya believes in making programming accessible to everyone. Her teaching style breaks down complex concepts into simple, digestible pieces. She has taught over 75,000 students worldwide.',
        expertise: ['JavaScript', 'ES6+', 'DOM', 'Async JS', 'Web APIs']
      },
      features: [
        { icon: '🌐', title: 'Universal Language', description: 'Runs everywhere - browser, server, mobile' },
        { icon: '🔧', title: 'Versatile', description: 'Build any type of application' },
        { icon: '📈', title: 'High Demand', description: 'Most in-demand programming skill' },
        { icon: '🎯', title: 'Foundation', description: 'Gateway to frameworks like React & Angular' }
      ],
      modules: [
        {
          title: 'JavaScript Fundamentals',
          topics: ['Variables & Data Types', 'Operators & Expressions', 'Control Flow', 'Functions'],
          duration: '2 weeks',
          videoCount: 28
        },
        {
          title: 'Objects & Arrays',
          topics: ['Object Literals', 'Array Methods', 'Destructuring', 'Spread & Rest Operators'],
          duration: '1.5 weeks',
          videoCount: 18
        },
        {
          title: 'DOM Manipulation',
          topics: ['Selecting Elements', 'Event Handling', 'DOM Traversal', 'Dynamic Content'],
          duration: '1.5 weeks',
          videoCount: 16
        },
        {
          title: 'Async JavaScript',
          topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetch API'],
          duration: '1.5 weeks',
          videoCount: 18
        },
        {
          title: 'Advanced Concepts',
          topics: ['Closures & Scope', 'Prototypes & Classes', 'Modules', 'Error Handling'],
          duration: '1.5 weeks',
          videoCount: 20
        }
      ],
      skills: ['ES6+ Syntax', 'DOM Manipulation', 'Async Programming', 'Event Handling', 'API Consumption', 'Debugging'],
      careerPaths: ['Front-end Developer', 'Full-stack Developer', 'Web Developer', 'JavaScript Developer'],
      projects: ['Interactive Quiz App', 'Todo List Application', 'Weather App with API', 'Expense Tracker'],
      tools: ['VS Code', 'Chrome DevTools', 'Node.js', 'Git'],
      faqs: [
        {
          question: 'Is this course good for complete beginners?',
          answer: 'Absolutely! This course starts from zero and assumes no prior programming knowledge. If you can use a computer, you can learn JavaScript with this course.'
        },
        {
          question: 'Will I be ready for React/Angular after this?',
          answer: 'Yes! This course specifically prepares you for modern frameworks. After completing this, you\'ll have all the JavaScript knowledge needed for React, Angular, Vue, or any framework.'
        },
        {
          question: 'How much time should I dedicate daily?',
          answer: 'We recommend 1-2 hours daily. With consistent practice, you can complete the course in 8 weeks and build a strong JavaScript foundation.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Rohan Desai',
          avatar: 'RD',
          rating: 5,
          date: '3 days ago',
          comment: 'I had zero coding experience before this course. Now I can build interactive websites and I\'m learning React! Priya ma\'am explains things so clearly.',
          helpful: 234,
          role: 'Student'
        },
        {
          id: 2,
          name: 'Meera Krishnan',
          avatar: 'MK',
          rating: 5,
          date: '1 week ago',
          comment: 'Best JavaScript course in Hindi! The projects are practical and the explanations are crystal clear. Totally worth every rupee.',
          helpful: 189,
          role: 'Junior Developer'
        },
        {
          id: 3,
          name: 'Suresh Nair',
          avatar: 'SN',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Coming from a non-technical background, I was scared of coding. This course changed everything. Now working as a frontend developer!',
          helpful: 167,
          role: 'Frontend Developer at Freshworks'
        }
      ]
    },
    'typescript': {
      id: 'typescript',
      name: 'TypeScript Essentials',
      tagline: 'Write safer, scalable JavaScript code',
      icon: '🔷',
      color: '#3178C6',
      description: 'Learn TypeScript to write safer, more maintainable JavaScript code with static typing.',
      longDescription: `TypeScript is a strongly typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript. This course teaches you TypeScript from fundamentals to advanced concepts like generics, utility types, and declaration files. You'll learn how TypeScript catches errors at compile time, provides better tooling, and makes large codebases manageable.`,
      duration: '6 Weeks',
      level: 'Intermediate',
      price: 8999,
      originalPrice: 17999,
      rating: 4.8,
      reviewCount: 1876,
      studentCount: 9800,
      lastUpdated: 'December 2023',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['Strong JavaScript knowledge', 'Understanding of OOP concepts', 'ES6+ familiarity'],
      instructor: {
        name: 'Sanjay Gupta',
        title: 'TypeScript Expert & Microsoft MVP',
        avatar: 'SG',
        rating: 4.9,
        students: 28000,
        courses: 3,
        bio: 'Sanjay is a Microsoft MVP with deep expertise in TypeScript. He has contributed to open-source TypeScript projects and worked on enterprise applications at Microsoft India.',
        expertise: ['TypeScript', 'JavaScript', 'Angular', 'Node.js', 'Azure']
      },
      features: [
        { icon: '🛡️', title: 'Type Safety', description: 'Catch errors before runtime' },
        { icon: '🔍', title: 'Better Tooling', description: 'Superior IDE support & autocomplete' },
        { icon: '📚', title: 'Self-documenting', description: 'Types serve as documentation' },
        { icon: '🏢', title: 'Enterprise Ready', description: 'Built for large-scale applications' }
      ],
      modules: [
        {
          title: 'TypeScript Basics',
          topics: ['Type Annotations', 'Basic Types', 'Type Inference', 'Union & Intersection Types'],
          duration: '1.5 weeks',
          videoCount: 16
        },
        {
          title: 'Interfaces & Types',
          topics: ['Interface Declaration', 'Type Aliases', 'Optional & Readonly', 'Index Signatures'],
          duration: '1 week',
          videoCount: 12
        },
        {
          title: 'Functions & Classes',
          topics: ['Function Types', 'Overloads', 'Classes & Inheritance', 'Access Modifiers'],
          duration: '1.5 weeks',
          videoCount: 14
        },
        {
          title: 'Generics',
          topics: ['Generic Functions', 'Generic Classes', 'Constraints', 'Utility Types'],
          duration: '1 week',
          videoCount: 12
        },
        {
          title: 'Advanced Types',
          topics: ['Conditional Types', 'Mapped Types', 'Template Literal Types', 'Type Guards'],
          duration: '1 week',
          videoCount: 14
        }
      ],
      skills: ['Static Typing', 'Interfaces', 'Generics', 'Type Guards', 'Declaration Files', 'Compiler Configuration'],
      careerPaths: ['TypeScript Developer', 'Angular Developer', 'Full-stack Developer', 'Enterprise Developer'],
      projects: ['Type-safe API Client', 'Generic Data Structures', 'Typed State Management', 'CLI Tool'],
      tools: ['VS Code', 'TypeScript Compiler', 'ts-node', 'ESLint'],
      faqs: [
        {
          question: 'Should I learn JavaScript before TypeScript?',
          answer: 'Yes, TypeScript is a superset of JavaScript, so you need a solid JavaScript foundation. Complete our JavaScript course first if you\'re not confident with JS.'
        },
        {
          question: 'Is TypeScript required for Angular?',
          answer: 'Yes, Angular is built with TypeScript and requires it. This course will prepare you perfectly for Angular development.'
        },
        {
          question: 'Can I use TypeScript with React?',
          answer: 'Absolutely! TypeScript is very popular in the React ecosystem. Many companies use TypeScript with React for type safety.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Arjun Menon',
          avatar: 'AM',
          rating: 5,
          date: '1 week ago',
          comment: 'Finally understand generics! This course explained TypeScript better than any documentation. Now I write much safer code.',
          helpful: 78,
          role: 'Senior Developer at Amazon'
        },
        {
          id: 2,
          name: 'Neha Saxena',
          avatar: 'NS',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Essential course for anyone serious about JavaScript development. The advanced types section is gold!',
          helpful: 92,
          role: 'Full Stack Developer'
        }
      ]
    },
    'tailwind': {
      id: 'tailwind',
      name: 'Tailwind CSS Mastery',
      tagline: 'Build beautiful UIs at lightning speed',
      icon: '🎨',
      color: '#06B6D4',
      description: 'Master Tailwind CSS to build beautiful, responsive websites without leaving your HTML.',
      longDescription: `Tailwind CSS is a utility-first CSS framework that revolutionized how we write CSS. This course teaches you to build stunning interfaces using utility classes, responsive design, dark mode, and custom themes. You'll learn component patterns, animations, and how to configure Tailwind for production. Perfect for developers who want to build faster without sacrificing design quality.`,
      duration: '4 Weeks',
      level: 'Beginner',
      price: 5999,
      originalPrice: 11999,
      rating: 4.9,
      reviewCount: 2156,
      studentCount: 16200,
      lastUpdated: 'January 2024',
      language: 'English & Hindi',
      certificate: true,
      lifetimeAccess: true,
      prerequisites: ['HTML fundamentals', 'Basic CSS knowledge', 'Understanding of responsive design'],
      instructor: {
        name: 'Kavya Patel',
        title: 'UI/UX Developer & Design Systems Expert',
        avatar: 'KP',
        rating: 4.9,
        students: 42000,
        courses: 4,
        bio: 'Kavya specializes in design systems and modern CSS frameworks. She has built design systems for Fortune 500 companies and loves teaching beautiful UI development.',
        expertise: ['Tailwind CSS', 'CSS', 'UI Design', 'Design Systems', 'Figma']
      },
      features: [
        { icon: '⚡', title: 'Rapid Development', description: 'Build UIs 10x faster than traditional CSS' },
        { icon: '🎯', title: 'Utility-First', description: 'No more naming CSS classes' },
        { icon: '📱', title: 'Responsive', description: 'Mobile-first responsive design built-in' },
        { icon: '🌙', title: 'Dark Mode', description: 'Built-in dark mode with one class' }
      ],
      modules: [
        {
          title: 'Tailwind Fundamentals',
          topics: ['Utility Classes', 'Spacing & Sizing', 'Colors & Typography', 'Flexbox & Grid'],
          duration: '1 week',
          videoCount: 18
        },
        {
          title: 'Responsive Design',
          topics: ['Breakpoints', 'Responsive Utilities', 'Mobile-First Approach', 'Container Queries'],
          duration: '1 week',
          videoCount: 14
        },
        {
          title: 'Components & Plugins',
          topics: ['Building Components', 'Official Plugins', 'Forms & Typography', 'Animations'],
          duration: '1 week',
          videoCount: 16
        },
        {
          title: 'Customization & Advanced',
          topics: ['Tailwind Config', 'Custom Utilities', 'Theme Extension', 'Production Optimization'],
          duration: '1 week',
          videoCount: 12
        }
      ],
      skills: ['Utility-First CSS', 'Responsive Design', 'Component Patterns', 'Theme Customization', 'Build Optimization'],
      careerPaths: ['Front-end Developer', 'UI Developer', 'Web Designer', 'Full-stack Developer'],
      projects: ['Landing Page', 'Dashboard UI', 'E-commerce Product Page', 'Portfolio Website'],
      tools: ['VS Code', 'Tailwind CSS IntelliSense', 'PostCSS', 'Prettier'],
      faqs: [
        {
          question: 'Do I need to know CSS before Tailwind?',
          answer: 'Basic CSS knowledge helps but isn\'t mandatory. Tailwind actually makes CSS easier to learn because you see how utilities translate to CSS properties.'
        },
        {
          question: 'Is Tailwind better than Bootstrap?',
          answer: 'They serve different purposes. Tailwind gives you more control and customization, while Bootstrap provides ready-made components. Most modern projects prefer Tailwind.'
        },
        {
          question: 'Will my HTML look messy with all those classes?',
          answer: 'At first it might seem like a lot, but you\'ll quickly appreciate how Tailwind keeps styles close to markup. We also teach component extraction patterns to keep code clean.'
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Ishaan Verma',
          avatar: 'IV',
          rating: 5,
          date: '5 days ago',
          comment: 'I used to hate CSS but Tailwind changed everything! Now I can build beautiful UIs in minutes. This course is perfect for learning it.',
          helpful: 145,
          role: 'Frontend Developer'
        },
        {
          id: 2,
          name: 'Divya Sharma',
          avatar: 'DS',
          rating: 5,
          date: '2 weeks ago',
          comment: 'The projects are amazing! I built my portfolio using what I learned and got compliments from recruiters. Highly recommend!',
          helpful: 112,
          role: 'Web Developer at Ola'
        },
        {
          id: 3,
          name: 'Prakash Iyer',
          avatar: 'PI',
          rating: 4,
          date: '1 month ago',
          comment: 'Great course for beginners. The responsive design section could be longer, but overall excellent value for the price.',
          helpful: 67,
          role: 'UI Developer'
        }
      ]
    }
  };

  course = computed(() => {
    const id = this.courseId();
    return this.coursesData[id] || null;
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']?.toLowerCase();
      if (id && this.coursesData[id]) {
        this.courseId.set(id);
      } else {
        this.router.navigate(['/cources']);
      }
    });
  }

  getColorStyle(color: string): string {
    return color;
  }

  // FAQ toggle
  toggleFaq(index: number): void {
    const course = this.course();
    if (course) {
      course.faqs[index].isOpen = !course.faqs[index].isOpen;
    }
  }

  // Format price with currency
  formatPrice(price: number): string {
    return '₹' + price.toLocaleString('en-IN');
  }

  // Calculate discount percentage
  calculateDiscount(price: number, originalPrice: number): number {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }

  // Get star array for ratings
  getStarArray(rating: number): { filled: boolean }[] {
    return Array(5).fill(0).map((_, i) => ({ filled: i < Math.floor(rating) }));
  }

  // Format student count
  formatStudentCount(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return count.toString();
  }

  // Total video count
  getTotalVideos(): number {
    const course = this.course();
    if (!course) return 0;
    return course.modules.reduce((total, module) => total + module.videoCount, 0);
  }

  // Enroll action
  enrollNow(): void {
    const course = this.course();
    if (course) {
      alert(`Enrolling in ${course.name}!\n\nIn a real application, this would redirect to a payment page.`);
    }
  }
}
