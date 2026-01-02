import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  isAuthenticated?: boolean;
  user?: {
    name: string;
    avatar?: string;
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showFooter = true,
  isAuthenticated,
  user,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} user={user} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
