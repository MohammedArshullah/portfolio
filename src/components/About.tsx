import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { GraduationCap, Code, Target, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-3xl md:text-4xl font-bold text-transparent bg-clip-text gradient-cyber mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate computer science student with a drive for innovative solutions and full-stack development.
          </p>
        </div>

        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <div className="fade-in-element opacity-0 space-y-6">
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h3 className="font-cyber text-2xl font-bold text-foreground mb-2">
                  A. Mohammed Arshullah
                </h3>
                <p className="text-primary font-medium text-lg">Full Stack Python Developer</p>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Final year Computer Science Engineering student at MIET Trichy with a passion for 
                full-stack development and problem-solving. Experienced in Python/Django development 
                with a strong foundation in data structures and algorithms.
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Trichy, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Available for Internships</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-medium text-sm">CSE Final Year</span>
                </div>
                <div className="flex items-center gap-2 text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  <Code className="w-4 h-4" />
                  <span className="font-medium text-sm">Python Developer</span>
                </div>
                <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <Target className="w-4 h-4" />
                  <span className="font-medium text-sm">Seeking Internships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Highlights */}
          <div className="fade-in-element opacity-0 space-y-6" style={{ animationDelay: '200ms' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cyber text-lg font-semibold text-foreground">Education</h4>
                    <p className="text-muted-foreground">MIET Trichy</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Pursuing B.E. in Computer Science Engineering with focus on software development, 
                  data structures, and modern web technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-cyber text-lg font-semibold text-foreground">Specialization</h4>
                    <p className="text-muted-foreground">Full Stack Development</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Python/Django backend development with modern frontend technologies 
                  and database management systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-cyber text-lg font-semibold text-foreground">Career Goal</h4>
                    <p className="text-muted-foreground">Software Engineer Intern</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Seeking internship opportunities to apply my skills in real-world projects and 
                  contribute to innovative software solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
