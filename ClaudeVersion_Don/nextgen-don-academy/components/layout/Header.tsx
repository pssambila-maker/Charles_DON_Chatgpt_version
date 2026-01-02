'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut, BookOpen, Settings } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

interface HeaderProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false, user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NG</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              NextGenDON Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-primary-600"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                  )}
                  <span className="text-gray-700 font-medium">{user.name}</span>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <Link
                      href="/dashboard"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      My Courses
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <button className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-50">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated && user ? (
                <>
                  <hr className="my-2" />
                  <div className="px-4 py-2">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    My Courses
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Settings
                  </Link>
                  <button className="text-red-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg text-left">
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 px-4">
                  <Link href="/login">
                    <Button variant="outline" fullWidth>
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="primary" fullWidth>
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
