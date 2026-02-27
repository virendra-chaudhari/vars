import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

interface Module {
  title: string;
  topics: string[];
  duration: string;
}

interface CourseFeature {
  icon: string;
  title: string;
  description: string;
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
  prerequisites: string[];
  features: CourseFeature[];
  modules: Module[];
  skills: string[];
  careerPaths: string[];
  projects: string[];
  tools: string[];
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
      name: 'Angular',
      tagline: 'Build enterprise-grade web applications',
      icon: '🅰️',
      color: '#DD0031',
      description: 'Master Angular, the powerful TypeScript-based framework by Google for building scalable, maintainable web applications.',
      longDescription: `Angular is a comprehensive platform for building modern web applications. Developed and maintained by Google, it provides a complete solution for front-end development with features like two-way data binding, dependency injection, and a powerful CLI. Angular uses TypeScript, which adds static typing to JavaScript, making your code more robust and maintainable. With Angular, you can build everything from small single-page applications to large enterprise systems used by millions of users.`,
      duration: '12 Weeks',
      level: 'Intermediate',
      prerequisites: ['Basic HTML & CSS', 'JavaScript fundamentals', 'Understanding of TypeScript basics'],
      features: [
        { icon: '🏗️', title: 'Component Architecture', description: 'Build reusable, modular UI components' },
        { icon: '🔄', title: 'Reactive Programming', description: 'Master RxJS and reactive patterns' },
        { icon: '🛡️', title: 'Type Safety', description: 'Write robust code with TypeScript' },
        { icon: '⚡', title: 'Performance', description: 'Optimize with lazy loading & AOT compilation' }
      ],
      modules: [
        {
          title: 'Angular Fundamentals',
          topics: ['Angular CLI & Project Setup', 'Components & Templates', 'Data Binding & Directives', 'Pipes & Transformations'],
          duration: '2 weeks'
        },
        {
          title: 'Components & Communication',
          topics: ['Input/Output Properties', 'ViewChild & ContentChild', 'Component Lifecycle Hooks', 'Dynamic Components'],
          duration: '2 weeks'
        },
        {
          title: 'Services & Dependency Injection',
          topics: ['Creating Services', 'Dependency Injection System', 'Hierarchical Injectors', 'Singleton vs Multi-instance'],
          duration: '1.5 weeks'
        },
        {
          title: 'Routing & Navigation',
          topics: ['Router Configuration', 'Route Guards', 'Lazy Loading Modules', 'Resolver & Navigation Events'],
          duration: '1.5 weeks'
        },
        {
          title: 'Forms & Validation',
          topics: ['Template-driven Forms', 'Reactive Forms', 'Custom Validators', 'Form Arrays & Groups'],
          duration: '2 weeks'
        },
        {
          title: 'HTTP & State Management',
          topics: ['HttpClient Module', 'Interceptors', 'Error Handling', 'NgRx State Management'],
          duration: '2 weeks'
        },
        {
          title: 'Testing & Deployment',
          topics: ['Unit Testing with Jasmine', 'E2E Testing with Cypress', 'Build Optimization', 'Deployment Strategies'],
          duration: '1 week'
        }
      ],
      skills: ['Component-based Architecture', 'TypeScript', 'RxJS Observables', 'Angular CLI', 'Unit Testing', 'State Management', 'RESTful API Integration'],
      careerPaths: ['Angular Developer', 'Front-end Engineer', 'Full-stack Developer', 'Enterprise Application Developer'],
      projects: ['Task Management App', 'E-commerce Platform', 'Real-time Chat Application', 'Admin Dashboard'],
      tools: ['VS Code', 'Angular CLI', 'Chrome DevTools', 'Augury', 'Git']
    },
    'react': {
      id: 'react',
      name: 'React JS',
      tagline: 'Build modern user interfaces with ease',
      icon: '⚛️',
      color: '#61DAFB',
      description: 'Learn React, the most popular JavaScript library for building dynamic, interactive user interfaces.',
      longDescription: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Created by Facebook (Meta), it has become the most widely-used front-end library in the industry. React's component-based architecture allows you to build encapsulated components that manage their own state, then compose them to make complex UIs. With the introduction of Hooks, React has become even more powerful, enabling you to use state and other React features without writing classes.`,
      duration: '10 Weeks',
      level: 'Intermediate',
      prerequisites: ['HTML & CSS proficiency', 'JavaScript ES6+ knowledge', 'Basic programming concepts'],
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
          duration: '2 weeks'
        },
        {
          title: 'React Hooks Deep Dive',
          topics: ['useState & useEffect', 'useContext & useReducer', 'useMemo & useCallback', 'Custom Hooks'],
          duration: '2 weeks'
        },
        {
          title: 'State Management',
          topics: ['Context API', 'Redux Toolkit', 'Zustand', 'React Query'],
          duration: '2 weeks'
        },
        {
          title: 'Routing & Navigation',
          topics: ['React Router v6', 'Dynamic Routing', 'Protected Routes', 'Navigation Patterns'],
          duration: '1 week'
        },
        {
          title: 'Styling & UI',
          topics: ['CSS Modules', 'Styled Components', 'Tailwind with React', 'Component Libraries'],
          duration: '1 week'
        },
        {
          title: 'Advanced Patterns',
          topics: ['Higher-Order Components', 'Render Props', 'Compound Components', 'Performance Optimization'],
          duration: '2 weeks'
        }
      ],
      skills: ['JSX', 'React Hooks', 'State Management', 'React Router', 'Redux', 'API Integration', 'Testing with Jest'],
      careerPaths: ['React Developer', 'Front-end Developer', 'Full-stack Developer', 'UI Engineer'],
      projects: ['Social Media Feed', 'Movie Database App', 'Shopping Cart', 'Weather Dashboard'],
      tools: ['VS Code', 'Create React App', 'Vite', 'React DevTools', 'Redux DevTools']
    },
    'node': {
      id: 'node',
      name: 'Node JS',
      tagline: 'Build scalable server-side applications',
      icon: '🟢',
      color: '#339933',
      description: 'Master Node.js to build fast, scalable network applications and RESTful APIs.',
      longDescription: `Node.js is a powerful JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript on the server. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications. With Node.js, you can build everything from simple APIs to complex microservices architectures. The npm ecosystem provides access to over 1.5 million packages, making it one of the most versatile platforms for back-end development.`,
      duration: '10 Weeks',
      level: 'Intermediate',
      prerequisites: ['JavaScript proficiency', 'Basic understanding of HTTP', 'Command line basics'],
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
          duration: '2 weeks'
        },
        {
          title: 'Express.js Framework',
          topics: ['Routing & Middleware', 'Request/Response Handling', 'Error Handling', 'Template Engines'],
          duration: '2 weeks'
        },
        {
          title: 'Database Integration',
          topics: ['MongoDB with Mongoose', 'PostgreSQL with Sequelize', 'Redis Caching', 'Database Design'],
          duration: '2 weeks'
        },
        {
          title: 'Authentication & Security',
          topics: ['JWT Authentication', 'OAuth 2.0', 'Password Hashing', 'Security Best Practices'],
          duration: '1.5 weeks'
        },
        {
          title: 'RESTful API Design',
          topics: ['REST Principles', 'API Versioning', 'Documentation with Swagger', 'Rate Limiting'],
          duration: '1.5 weeks'
        },
        {
          title: 'Advanced Topics',
          topics: ['WebSockets & Real-time', 'Microservices', 'Docker & Deployment', 'Testing APIs'],
          duration: '1 week'
        }
      ],
      skills: ['Express.js', 'MongoDB', 'REST API Design', 'Authentication', 'WebSockets', 'Testing', 'Deployment'],
      careerPaths: ['Backend Developer', 'API Developer', 'Full-stack Developer', 'DevOps Engineer'],
      projects: ['RESTful Blog API', 'Real-time Chat Server', 'E-commerce Backend', 'Authentication System'],
      tools: ['VS Code', 'Postman', 'MongoDB Compass', 'Docker', 'Git']
    },
    'javascript': {
      id: 'javascript',
      name: 'JavaScript',
      tagline: 'The language of the web',
      icon: '🟨',
      color: '#F7DF1E',
      description: 'Master JavaScript from fundamentals to advanced concepts and become a proficient web developer.',
      longDescription: `JavaScript is the world's most popular programming language and the backbone of modern web development. It runs in every web browser and powers interactive websites, web applications, server-side applications, mobile apps, and even desktop applications. Understanding JavaScript deeply is essential for any web developer. This course takes you from fundamentals through advanced concepts like closures, prototypes, async programming, and modern ES6+ features.`,
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      prerequisites: ['Basic computer skills', 'HTML & CSS fundamentals', 'Logical thinking'],
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
          duration: '2 weeks'
        },
        {
          title: 'Objects & Arrays',
          topics: ['Object Literals', 'Array Methods', 'Destructuring', 'Spread & Rest Operators'],
          duration: '1.5 weeks'
        },
        {
          title: 'DOM Manipulation',
          topics: ['Selecting Elements', 'Event Handling', 'DOM Traversal', 'Dynamic Content'],
          duration: '1.5 weeks'
        },
        {
          title: 'Async JavaScript',
          topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetch API'],
          duration: '1.5 weeks'
        },
        {
          title: 'Advanced Concepts',
          topics: ['Closures & Scope', 'Prototypes & Classes', 'Modules', 'Error Handling'],
          duration: '1.5 weeks'
        }
      ],
      skills: ['ES6+ Syntax', 'DOM Manipulation', 'Async Programming', 'Event Handling', 'API Consumption', 'Debugging'],
      careerPaths: ['Front-end Developer', 'Full-stack Developer', 'Web Developer', 'JavaScript Developer'],
      projects: ['Interactive Quiz App', 'Todo List Application', 'Weather App', 'Calculator'],
      tools: ['VS Code', 'Chrome DevTools', 'Node.js', 'Git']
    },
    'typescript': {
      id: 'typescript',
      name: 'TypeScript',
      tagline: 'JavaScript that scales',
      icon: '🔷',
      color: '#3178C6',
      description: 'Learn TypeScript to write safer, more maintainable JavaScript code with static typing.',
      longDescription: `TypeScript is a strongly typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript. It adds optional static typing, classes, interfaces, and other powerful features that help you write more robust code. TypeScript catches errors at compile time rather than runtime, provides better tooling support with intelligent code completion, and makes refactoring large codebases much safer. It's become essential for enterprise applications and is the foundation of Angular.`,
      duration: '6 Weeks',
      level: 'Intermediate',
      prerequisites: ['Strong JavaScript knowledge', 'Understanding of OOP concepts', 'ES6+ familiarity'],
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
          duration: '1.5 weeks'
        },
        {
          title: 'Interfaces & Types',
          topics: ['Interface Declaration', 'Type Aliases', 'Optional & Readonly', 'Index Signatures'],
          duration: '1 week'
        },
        {
          title: 'Functions & Classes',
          topics: ['Function Types', 'Overloads', 'Classes & Inheritance', 'Access Modifiers'],
          duration: '1.5 weeks'
        },
        {
          title: 'Generics',
          topics: ['Generic Functions', 'Generic Classes', 'Constraints', 'Utility Types'],
          duration: '1 week'
        },
        {
          title: 'Advanced Types',
          topics: ['Conditional Types', 'Mapped Types', 'Template Literal Types', 'Type Guards'],
          duration: '1 week'
        }
      ],
      skills: ['Static Typing', 'Interfaces', 'Generics', 'Type Guards', 'Declaration Files', 'Compiler Configuration'],
      careerPaths: ['TypeScript Developer', 'Angular Developer', 'Full-stack Developer', 'Enterprise Developer'],
      projects: ['Type-safe API Client', 'Generic Data Structures', 'Typed State Management', 'CLI Tool'],
      tools: ['VS Code', 'TypeScript Compiler', 'ts-node', 'ESLint']
    },
    'tailwind': {
      id: 'tailwind',
      name: 'Tailwind CSS',
      tagline: 'Rapidly build modern websites',
      icon: '🎨',
      color: '#06B6D4',
      description: 'Master Tailwind CSS to build beautiful, responsive websites without leaving your HTML.',
      longDescription: `Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS. Unlike traditional frameworks like Bootstrap, Tailwind doesn't impose design decisions on you. Instead, it gives you the building blocks to create any design directly in your markup. With features like responsive design, dark mode, and a powerful configuration system, Tailwind has become the go-to choice for modern web development.`,
      duration: '4 Weeks',
      level: 'Beginner',
      prerequisites: ['HTML fundamentals', 'Basic CSS knowledge', 'Understanding of responsive design'],
      features: [
        { icon: '⚡', title: 'Rapid Development', description: 'Build UIs faster than ever' },
        { icon: '🎯', title: 'Utility-First', description: 'No more naming CSS classes' },
        { icon: '📱', title: 'Responsive', description: 'Mobile-first responsive design' },
        { icon: '🌙', title: 'Dark Mode', description: 'Built-in dark mode support' }
      ],
      modules: [
        {
          title: 'Tailwind Fundamentals',
          topics: ['Utility Classes', 'Spacing & Sizing', 'Colors & Typography', 'Flexbox & Grid'],
          duration: '1 week'
        },
        {
          title: 'Responsive Design',
          topics: ['Breakpoints', 'Responsive Utilities', 'Mobile-First Approach', 'Container Queries'],
          duration: '1 week'
        },
        {
          title: 'Components & Plugins',
          topics: ['Building Components', 'Official Plugins', 'Forms & Typography', 'Animations'],
          duration: '1 week'
        },
        {
          title: 'Customization & Advanced',
          topics: ['Tailwind Config', 'Custom Utilities', 'Theme Extension', 'Production Optimization'],
          duration: '1 week'
        }
      ],
      skills: ['Utility-First CSS', 'Responsive Design', 'Component Patterns', 'Theme Customization', 'Build Optimization'],
      careerPaths: ['Front-end Developer', 'UI Developer', 'Web Designer', 'Full-stack Developer'],
      projects: ['Landing Page', 'Dashboard UI', 'E-commerce Product Page', 'Portfolio Website'],
      tools: ['VS Code', 'Tailwind CSS IntelliSense', 'PostCSS', 'Prettier']
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
}
