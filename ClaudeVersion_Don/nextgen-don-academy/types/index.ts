// User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt: Date;
  enrolledCourses: string[]; // Array of course IDs
  profile?: UserProfile;
}

export interface UserProfile {
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  preferences?: {
    emailNotifications: boolean;
    darkMode: boolean;
  };
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  instructor: Instructor;
  thumbnail: string;
  price: number;
  currency: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string; // e.g., "10 hours"
  enrollmentCount: number;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  modules: Module[];
  requirements?: string[];
  whatYouWillLearn?: string[];
  tags?: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  avatar?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: 'video' | 'document' | 'quiz' | 'assignment';
  contentURL?: string;
  duration?: string; // e.g., "15:30"
  order: number;
  isFree?: boolean; // Preview lessons
}

// Enrollment Types
export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  status: 'active' | 'completed' | 'cancelled';
  progress: EnrollmentProgress;
  paymentId: string;
}

export interface EnrollmentProgress {
  completedLessons: string[]; // Array of lesson IDs
  percentComplete: number;
  lastAccessedAt: Date;
  currentLessonId?: string;
}

// Payment Types
export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  createdAt: Date;
  metadata?: Record<string, any>;
}

// Review Types
export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: Date;
  helpful: number; // Count of helpful votes
}

// Cart Types
export interface CartItem {
  courseId: string;
  course: Course;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Filter Types
export interface CourseFilters {
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  search?: string;
  sortBy?: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
