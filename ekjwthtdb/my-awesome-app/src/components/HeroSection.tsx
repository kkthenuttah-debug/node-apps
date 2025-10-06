import React from 'react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-brand-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight mb-4 animate-fade-in">
          Build Your Dream App with <span className="text-brand-purple">Lovable</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-fade-in animation-delay-500">
          The AI editor that brings your web application ideas to life, in real-time.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in animation-delay-1000">
          <Button size="lg" className="bg-gradient-brand text-white shadow-lg-brand hover:shadow-glow transition-all duration-300">Get Started</Button>
          <Button size="lg" variant="outline" className="text-text-primary border-border hover:bg-primary/10">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;