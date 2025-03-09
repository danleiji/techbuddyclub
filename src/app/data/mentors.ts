import { Mentor } from '../types/mentor';

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Senior Software Engineer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Passionate about helping junior developers grow and succeed in their careers. Specialized in web development and system design.',
    expertise: ['React', 'Node.js', 'System Design', 'Career Growth'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/jobbuddygroup/30min',
    stats: {
      totalBookings: 124,
      averageRating: 4.9,
      reviewCount: 89,
    },
    featuredReviews: [
      {
        id: '1',
        author: 'David L.',
        rating: 5,
        comment: 'Alex helped me prepare for my Google interview. His system design expertise is incredible!',
        date: '2024-02-15',
      },
      {
        id: '1-2',
        author: 'Sarah M.',
        rating: 5,
        comment: 'Best $10 I\'ve ever spent! Got amazing React tips and career advice.',
        date: '2024-02-22',
      }
    ],
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Engineering Manager',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Experienced engineering manager helping tech professionals navigate their career path and develop leadership skills.',
    expertise: ['Leadership', 'Career Development', 'Team Management', 'Technical Architecture'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/jobbuddygroup/30min',
    stats: {
      totalBookings: 156,
      averageRating: 4.8,
      reviewCount: 112,
    },
    featuredReviews: [
      {
        id: '2',
        author: 'Michelle K.',
        rating: 5,
        comment: 'Sarah\'s guidance helped me transition from senior dev to engineering manager. Invaluable advice!',
        date: '2024-02-18',
      },
      {
        id: '2-2',
        author: 'John D.',
        rating: 5,
        comment: 'Such an affordable way to get career guidance from a Microsoft engineering manager!',
        date: '2024-02-21',
      }
    ],
  },
  {
    id: '3',
    name: 'Michael Park',
    role: 'Product Manager',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Product manager with experience in both engineering and product. Helping engineers transition into product management.',
    expertise: ['Product Management', 'Career Transition', 'Technical Product Strategy'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/jobbuddygroup/30min',
    stats: {
      totalBookings: 98,
      averageRating: 4.9,
      reviewCount: 67,
    },
    featuredReviews: [
      {
        id: '3',
        author: 'James R.',
        rating: 5,
        comment: 'Michael provided practical insights that helped me land a PM role at a top tech company.',
        date: '2024-02-10',
      },
      {
        id: '3-2',
        author: 'Amy L.',
        rating: 5,
        comment: 'Perfect for students! Got amazing PM interview tips for just $10.',
        date: '2024-02-19',
      }
    ],
  },
  {
    id: '4',
    name: 'Emily Zhang',
    role: 'Tech Lead',
    company: 'Meta',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Tech lead passionate about mentoring and helping others grow in their technical leadership journey.',
    expertise: ['Technical Leadership', 'System Design', 'Team Leadership', 'Career Growth'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/jobbuddygroup/30min',
    stats: {
      totalBookings: 143,
      averageRating: 5.0,
      reviewCount: 94,
    },
    featuredReviews: [
      {
        id: '4',
        author: 'Thomas W.',
        rating: 5,
        comment: 'Emily\'s technical leadership advice transformed how I approach team challenges.',
        date: '2024-02-20',
      },
      {
        id: '4-2',
        author: 'Rachel K.',
        rating: 5,
        comment: 'As a CS student, this was the most valuable $10 investment in my career growth.',
        date: '2024-02-23',
      }
    ],
  },
  {
    id: '5',
    name: 'Ryan Patel',
    role: 'Staff Engineer',
    company: 'Stripe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Experienced in scaling engineering teams and systems. Passionate about mentoring engineers in distributed systems and architecture.',
    expertise: ['System Architecture', 'Scalability', 'Engineering Leadership', 'Career Growth'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/techbuddy/30min',
    stats: {
      totalBookings: 87,
      averageRating: 4.8,
      reviewCount: 62,
    },
    featuredReviews: [
      {
        id: '5',
        author: 'Lisa M.',
        rating: 5,
        comment: 'Ryan\'s deep technical knowledge and practical advice were exactly what I needed.',
        date: '2024-02-12',
      },
      {
        id: '5-2',
        author: 'Kevin P.',
        rating: 5,
        comment: 'Incredible value! Got expert system design tips from a Stripe staff engineer.',
        date: '2024-02-24',
      }
    ],
  },
  {
    id: '6',
    name: 'Nina Rodriguez',
    role: 'Engineering Director',
    company: 'Netflix',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80&crop=faces&fit=crop',
    bio: 'Helping engineers and managers build high-performing teams. Specialized in engineering strategy and organizational growth.',
    expertise: ['Engineering Strategy', 'Team Building', 'Technical Leadership', 'Organizational Design'],
    availability: {
      duration: '30 min',
      price: 10,
    },
    calendlyUrl: 'https://calendly.com/jobbuddygroup/30min',
    stats: {
      totalBookings: 112,
      averageRating: 4.9,
      reviewCount: 78,
    },
    featuredReviews: [
      {
        id: '6',
        author: 'Mark P.',
        rating: 5,
        comment: 'Nina provided invaluable insights into scaling engineering organizations.',
        date: '2024-02-16',
      },
      {
        id: '6-2',
        author: 'Jenny L.',
        rating: 5,
        comment: 'Amazing opportunity to get mentorship from a Netflix director at student-friendly pricing!',
        date: '2024-02-25',
      }
    ],
  },
]; 