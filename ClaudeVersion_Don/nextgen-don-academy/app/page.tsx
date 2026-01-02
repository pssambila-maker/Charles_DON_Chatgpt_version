import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, Clock, Shield, TrendingUp } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/course/CourseCard';
import { Course } from '@/types';

// Mock data for featured courses
const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development from scratch',
    shortDescription: 'Learn HTML, CSS, JavaScript, React, Node.js and more',
    instructor: {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Full-Stack Developer',
      avatar: '',
    },
    thumbnail: '',
    price: 99.99,
    currency: 'USD',
    category: 'Web Development',
    level: 'beginner',
    duration: '40 hours',
    enrollmentCount: 12450,
    rating: 4.8,
    reviewCount: 2340,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: true,
    modules: [],
  },
  {
    id: '2',
    title: 'Advanced Python Programming',
    description: 'Deep dive into Python for data science and automation',
    shortDescription: 'Master Python, pandas, NumPy, and machine learning basics',
    instructor: {
      id: '2',
      name: 'Michael Chen',
      title: 'Data Science Lead',
      avatar: '',
    },
    thumbnail: '',
    price: 89.99,
    currency: 'USD',
    category: 'Programming',
    level: 'intermediate',
    duration: '30 hours',
    enrollmentCount: 8920,
    rating: 4.9,
    reviewCount: 1890,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: true,
    modules: [],
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'Comprehensive guide to modern digital marketing',
    shortDescription: 'SEO, social media, content marketing, and analytics',
    instructor: {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'Marketing Director',
      avatar: '',
    },
    thumbnail: '',
    price: 79.99,
    currency: 'USD',
    category: 'Marketing',
    level: 'beginner',
    duration: '25 hours',
    enrollmentCount: 15670,
    rating: 4.7,
    reviewCount: 3210,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: true,
    modules: [],
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Career with Expert-Led Courses
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Learn in-demand skills from industry professionals and advance your career with NextGenDON Academy
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button variant="primary" size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                    Browse Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-48 h-48 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Premium Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NextGenDON Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the tools, content, and support you need to succeed in your professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of real-world experience',
              },
              {
                icon: Clock,
                title: 'Flexible Learning',
                description: 'Study at your own pace with lifetime access to course materials',
              },
              {
                icon: Award,
                title: 'Certified Courses',
                description: 'Earn recognized certificates to showcase your achievements',
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Content',
                description: 'High-quality video lessons, resources, and hands-on projects',
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Your data and payments are protected with industry-standard security',
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Advance your career with in-demand skills and knowledge',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Popular Courses
              </h2>
              <p className="text-xl text-gray-600">
                Start learning with our most popular courses
              </p>
            </div>
            <Link href="/courses">
              <Button variant="outline">
                View All Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already learning on NextGenDON Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="primary" size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
