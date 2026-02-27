import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
  experience: string;
  expertise: string[];
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  stat?: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  
  expandedFaq = signal<number | null>(null);
  animatedStats = signal<{ value: number; suffix: string; label: string; icon: string }[]>([]);
  private animationInterval: any;

  stats: Stat[] = [
    { value: 15420, suffix: '+', label: 'Students Trained', icon: '' },
    { value: 85, suffix: '+', label: 'Hiring Partners', icon: '' },
    { value: 12, suffix: '', label: 'Expert Mentors', icon: '' },
    { value: 97, suffix: '%', label: 'Placement Rate', icon: '' }
  ];

  milestones: Milestone[] = [
    { year: '2018', title: 'Foundation', description: 'Started as a small coaching center in Nagpur with just 5 students and a vision.', icon: '' },
    { year: '2019', title: 'First 100 Placements', description: 'Achieved first milestone of 100 successful placements in top IT companies.', icon: '' },
    { year: '2020', title: 'Online Expansion', description: 'Launched online training programs, reaching students across India.', icon: '' },
    { year: '2021', title: 'Industry Partnerships', description: 'Partnered with 50+ companies for direct hiring opportunities.', icon: '' },
    { year: '2022', title: '10,000 Alumni', description: 'Crossed 10,000 trained students with alumni at Google, Amazon, Microsoft.', icon: '' },
    { year: '2024', title: 'AI & Modern Tech', description: 'Launched AI-integrated curriculum with focus on GenAI and modern frameworks.', icon: '' }
  ];

  achievements: Achievement[] = [
    { icon: '', title: 'Best IT Training Institute', description: 'Awarded Best IT Training Institute in Central India - 2023' },
    { icon: '', title: '4.9/5 Student Rating', description: 'Consistently rated 4.9/5 by our students on Google Reviews' },
    { icon: '', title: 'ISO 9001:2015 Certified', description: 'Quality management certified for training excellence' },
    { icon: '', title: 'Top 10 Bootcamp India', description: 'Ranked among top 10 coding bootcamps in India' }
  ];

  features: Feature[] = [
    { icon: '', title: 'Industry Expert Trainers', description: 'All trainers are working professionals with 8+ years of hands-on industry experience.', stat: '8+ Yrs Avg Experience' },
    { icon: '', title: '70% Hands-on Practice', description: 'Learn by building real projects with practical coding focus.', stat: '15+ Live Projects' },
    { icon: '', title: 'Flexible Learning', description: 'Weekday, weekend, or self-paced batches to fit your schedule.', stat: 'Weekend Batches' },
    { icon: '', title: 'Affordable Excellence', description: 'Premium quality training at competitive prices with EMI options.', stat: 'EMI from ₹3,999/mo' },
    { icon: '', title: 'Globally Recognized Certification', description: 'Get certified credentials recognized by top tech companies worldwide.', stat: 'Industry Validated' },
    { icon: '', title: '100% Placement Assistance', description: 'Resume building, mock interviews, and direct referrals to hiring partners.', stat: '97% Placement Rate' }
  ];

  teamMembers: TeamMember[] = [
    { name: 'Virendra Chaudhari', role: 'Founder & Lead Instructor', avatar: 'VC', description: 'Passionate about making tech education accessible. Has trained 5000+ developers.', experience: '12+ Years', expertise: ['Angular', 'React', 'Node.js', 'System Design'] },
    { name: 'Priya Sharma', role: 'Senior Frontend Instructor', avatar: 'PS', description: 'Ex-Google engineer specializing in React and modern JavaScript.', experience: '10+ Years', expertise: ['React', 'JavaScript', 'TypeScript', 'UI/UX'] },
    { name: 'Rahul Verma', role: 'Backend Lead Instructor', avatar: 'RV', description: 'Built scalable systems at Amazon. Expert in Node.js and cloud architecture.', experience: '9+ Years', expertise: ['Node.js', 'MongoDB', 'AWS', 'Microservices'] },
    { name: 'Anjali Reddy', role: 'Career Success Manager', avatar: 'AR', description: 'Dedicated to student success. Has helped 3000+ students land their dream jobs.', experience: '7+ Years', expertise: ['Career Coaching', 'Resume Building', 'Interview Prep'] }
  ];

  faqs: FAQ[] = [
    { question: 'Who can join VARS Technosoft courses?', answer: 'Anyone with a passion for coding can join! We have courses for beginners as well as experienced professionals looking to upskill.' },
    { question: 'What is the typical class size?', answer: 'We maintain small batch sizes of 15-20 students for personalized attention and adequate doubt resolution time.' },
    { question: 'Do you provide placement assistance?', answer: 'Yes! We provide comprehensive placement support including resume building, mock interviews, and direct referrals to 85+ hiring partners with 97% placement rate.' },
    { question: 'Are courses available online?', answer: 'Yes, all courses are available both online (live instructor-led) and offline at our Nagpur center with the same quality of instruction.' },
    { question: 'What payment options are available?', answer: 'We offer one-time payment, EMI (starting ₹3,999/month), scholarships, and income share agreements for select programs.' },
    { question: 'Do I get a certificate?', answer: 'Yes, upon completion you receive a verified certificate recognized by our hiring partners that can be shared on LinkedIn.' }
  ];

  ngOnInit(): void {
    this.animateStats();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private animateStats(): void {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    this.animationInterval = setInterval(() => {
      currentStep++;
      const progress = this.easeOutQuart(currentStep / steps);
      this.animatedStats.set(this.stats.map(stat => ({ ...stat, value: Math.round(stat.value * progress) })));
      if (currentStep >= steps) {
        clearInterval(this.animationInterval);
      }
    }, interval);
  }

  private easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }

  toggleFaq(index: number): void {
    this.expandedFaq.update(current => current === index ? null : index);
  }

  formatStatValue(stat: { value: number; suffix: string }): string {
    if (stat.value >= 1000) {
      return (stat.value / 1000).toFixed(1).replace(/\.0$/, '') + 'k' + stat.suffix;
    }
    return stat.value + stat.suffix;
  }
}
