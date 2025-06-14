
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = projectsRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Hospital Management System",
      description: "Complete healthcare management solution with patient records, appointment scheduling, and staff management features.",
      tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      image: "/images/hospital.avif",
      github: "https://github.com/MohammedArshullah/hospital.git",
      demo: "#"
    },
    {
      title: "Farmer Connect",
      description: "Digital platform connecting farmers directly with consumers, eliminating middlemen and ensuring fair pricing for agricultural products.",
      tech: ["Python", "Django", "Bootstrap", "PostgreSQL", "API Integration"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
      github: "https://github.com/MohamedSami2005/code_sizzlers_gdg.git",
      demo: "#"
    },
    {
      title: "Shipyard Webpage",
      description: "Modern, responsive website for shipyard operations featuring project showcases, service listings, and contact management.",
      tech: ["Python", "Django", "Bootstrap", "PostgreSQL", "API Integration"],
      image: "/images/ship.png",
      github: "https://github.com/MohamedSami2005/shipyard_project.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-3xl md:text-4xl font-bold text-transparent bg-clip-text gradient-cyber mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development skills and innovative problem-solving approaches.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="font-cyber text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
  href={project.github} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex-1"
>
  <Button 
    size="sm" 
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
  >
    <Github className="w-4 h-4 mr-2" />
    Code
  </Button>
</a>

                 
                </div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
