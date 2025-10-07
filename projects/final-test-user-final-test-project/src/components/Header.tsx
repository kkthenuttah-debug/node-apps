import React from 'react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-background text-foreground shadow-card-shadow transition-all duration-400 ease-in-out-expo hover:shadow-card-shadow-hover sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2 font-serif text-2xl font-bold text-primary transition-colors duration-300 hover:text-primary-foreground animate-fade-in">
            <span className="text-esquire-700 dark:text-esquire-300">Esquire</span>
            <span className="text-esquire-500 dark:text-esquire-500">Solicitors</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 animate-slide-down">
          <a href="#services" className="text-muted-foreground transition-colors duration-300 hover:text-primary hover:underline underline-offset-4">Services</a>
          <a href="#about" className="text-muted-foreground transition-colors duration-300 hover:text-primary hover:underline underline-offset-4">About Us</a>
          <a href="#team" className="text-muted-foreground transition-colors duration-300 hover:text-primary hover:underline underline-offset-4">Our Team</a>
          <a href="#contact" className="text-muted-foreground transition-colors duration-300 hover:text-primary hover:underline underline-offset-4">Contact</a>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:flex animate-scale-in">
          <Button variant="default" className="bg-gradient-brand text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 ease-in-out-expo">
            Get a Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;