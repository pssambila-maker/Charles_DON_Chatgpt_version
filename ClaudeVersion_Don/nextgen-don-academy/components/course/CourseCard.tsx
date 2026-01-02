import React from 'react';
import Link from 'next/link';
import { Star, Clock, Users, Play } from 'lucide-react';
import { Course } from '@/types';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

interface CourseCardProps {
  course: Course;
  variant?: 'default' | 'compact';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant = 'default' }) => {
  const {
    id,
    title,
    shortDescription,
    instructor,
    thumbnail,
    price,
    currency,
    level,
    duration,
    rating,
    reviewCount,
    enrollmentCount,
  } = course;

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Thumbnail */}
      <Link href={`/courses/${id}`} className="relative aspect-video overflow-hidden bg-gray-200">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <Play className="w-16 h-16 text-white opacity-50" />
          </div>
        )}

        {/* Level Badge */}
        <div className="absolute top-3 right-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold",
            level === 'beginner' && "bg-green-100 text-green-800",
            level === 'intermediate' && "bg-yellow-100 text-yellow-800",
            level === 'advanced' && "bg-red-100 text-red-800"
          )}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <Link href={`/courses/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-3">
          By {instructor.name}
        </p>

        {/* Description */}
        {variant === 'default' && shortDescription && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {shortDescription}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {enrollmentCount.toLocaleString()}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-semibold text-gray-900">{rating}</span>
          </div>
          <span className="ml-2 text-sm text-gray-500">
            ({reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Spacer to push price/button to bottom */}
        <div className="mt-auto">
          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              {price > 0 ? (
                <span className="text-2xl font-bold text-primary-800">
                  {currency === 'USD' ? '$' : currency}
                  {price.toFixed(2)}
                </span>
              ) : (
                <span className="text-2xl font-bold text-success">Free</span>
              )}
            </div>
            <Link href={`/courses/${id}`}>
              <Button variant="primary" size="md">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
