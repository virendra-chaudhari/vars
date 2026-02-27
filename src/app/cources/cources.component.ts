import { Component, signal, computed } from '@angular/core';
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
}

@Component({
  selector: 'app-cources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cources.component.html',
  styleUrl: './cources.component.scss'
})
export class CourcesComponent {
  // Using Angular Signals for reactive state management
  searchQuery = signal('');

  // Course data
  courseDetails = signal<Course[]>([
    {
      id: 1,
      routeId: 'angular',
      buttonLabel: 'View Details',
      courseName: "Angular",
      details: "Angular is a TypeScript-based open-source front-end web framework maintained by Google. It's used for building dynamic single-page applications with powerful features like dependency injection, reactive forms, and a comprehensive CLI.",
      syllabus: "Components, Services, Routing, Forms, HTTP Client, RxJS, State Management, Testing",
      modalBody: 'Complete Angular Development Course',
      icon: '🅰️'
    },
    {
      id: 2,
      routeId: 'react',
      buttonLabel: 'View Details',
      courseName: "React JS",
      details: "React is a JavaScript library for building user interfaces. It's maintained by Meta and a community of developers. React uses a virtual DOM for efficient updates and a component-based architecture.",
      syllabus: "JSX, Components, Props, State, Hooks, Context, Redux, React Router",
      modalBody: 'Complete React Development Course',
      icon: '⚛️'
    },
    {
      id: 3,
      routeId: 'node',
      buttonLabel: 'View Details',
      courseName: "Node JS",
      details: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables server-side JavaScript execution and is perfect for building scalable network applications with its non-blocking I/O model.",
      syllabus: "Core Modules, Express.js, REST APIs, Authentication, Database Integration, WebSockets",
      modalBody: 'Complete Node.js Backend Course',
      icon: '🟢'
    },
    {
      id: 4,
      routeId: 'javascript',
      buttonLabel: 'View Details',
      courseName: "JavaScript",
      details: "JavaScript is a versatile programming language that powers the web. It's essential for front-end development and increasingly popular for back-end development with Node.js.",
      syllabus: "ES6+, DOM Manipulation, Async/Await, Promises, Modules, Classes, Closures",
      modalBody: 'Complete JavaScript Mastery Course',
      icon: '🟨'
    },
    {
      id: 5,
      routeId: 'typescript',
      buttonLabel: 'View Details',
      courseName: "TypeScript",
      details: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming to the language.",
      syllabus: "Types, Interfaces, Generics, Decorators, Modules, Configuration, Advanced Patterns",
      modalBody: 'Complete TypeScript Course',
      icon: '🔷'
    },
    {
      id: 6,
      routeId: 'tailwind',
      buttonLabel: 'View Details',
      courseName: "Tailwind CSS",
      details: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. It provides low-level utility classes that let you build custom designs without leaving your HTML.",
      syllabus: "Utility Classes, Responsive Design, Customization, Components, Dark Mode, Animations",
      modalBody: 'Complete Tailwind CSS Course',
      icon: '🎨'
    }
  ]);

  // Computed value for filtered courses
  filteredCourses = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.courseDetails();
    return this.courseDetails().filter(course =>
      course.courseName.toLowerCase().includes(query) ||
      course.details.toLowerCase().includes(query)
    );
  });

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }
}
