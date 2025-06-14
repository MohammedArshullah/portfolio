
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronDown } from 'lucide-react';



const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div ref={heroRef} className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Profile Photo and Name Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background p-2">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/images/profile.jpg"
                    alt="A.Mohammed Arshullah"
                    className="object-cover"
                  />
                  <AvatarFallback className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="font-cyber text-4xl font-bold text-primary">MA</span>
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* 3D Animated Name */}
          <div className="perspective-1000">
            <h1 className="font-cyber text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text gradient-cyber transform-style-3d hover:scale-105 transition-transform duration-500 neon-text">
              A.MOHAMMED
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">ARSHULLAH</span>
            </h1>
          </div>
        </div>

        {/* Typing Animation Tagline */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="font-mono text-lg md:text-xl text-muted-foreground border-r-2 border-primary whitespace-nowrap overflow-hidden animate-typing">
            Python Full Stack Dev | Problem Solver | CSE Final Year
          </p>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <Button 
            onClick={scrollToProjects}
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transform transition-all duration-300 hover:scale-105 animate-glow"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <a 
  href="/resume.pdf" 
  download="Arshullah_Resume.pdf"
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transform transition-all duration-300 hover:scale-105 glass-effect"
  >
    Download Resume
  </Button>
</a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="mx-auto h-8 w-8 text-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
