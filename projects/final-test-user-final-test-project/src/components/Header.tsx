import React from 'react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-background text-foreground shadow-md py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
          Esquire <span className="text-accent">Solicitors</span>
        </h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-lg font-medium">Home</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-lg font-medium">Services</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-lg font-medium">About Us</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-lg font-medium">Contact</a>
      </nav>
      <div className="hidden md:block">
        <Button variant="hero" size="lg">Get a Consultation</Button>
      </div>
      {/* Mobile menu button - to be implemented later */}
      <div className="md:hidden">
        <Button variant="ghost-brand" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
