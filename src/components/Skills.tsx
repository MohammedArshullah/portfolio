import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Server, Globe, Brain, Zap, Award, ExternalLink } from 'lucide-react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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

    const elements = skillsRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      color: "primary",
      skills: ["Python", "Django", "REST APIs", "PostgreSQL", "MySQL"]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "secondary",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "Programming & DSA",
      icon: Code,
      color: "accent",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "OOP", "Design Patterns"]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "primary",
      skills: ["PostgreSQL", "MySQL", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "secondary",
      skills: ["Software Engineering", "System Design", "Web Development", "Database Design"]
    },
    {
      title: "Soft Skills",
      icon: Zap,
      color: "accent",
      skills: ["Problem Solving", "Team Work", "Communication", "Time Management"]
    }
  ];

  const handleViewCertificates = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cyber text-3xl md:text-4xl font-bold text-transparent bg-clip-text gradient-cyber mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Console Animation */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-muted-foreground">~/arshullah-portfolio</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary">{'>>'}</span>
                <span className="text-foreground animate-typing">print("Building innovative solutions...")</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">{'>>'}</span>
                <span className="text-muted-foreground">skills.load(["Python", "Django", "React"])</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">{'>>'}</span>
                <span className="text-muted-foreground">status: Ready for internship opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="fade-in-element opacity-0 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:animate-pulse`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-cyber text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="flex-1 mx-3 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${category.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: `${75 + Math.random() * 25}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NPTEL Certificates Section */}
        <div className="mt-16">
          <h3 className="font-cyber text-2xl font-bold text-center text-transparent bg-clip-text gradient-cyber mb-8">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cyber text-lg font-semibold text-foreground">NPTEL - Introduction to IoT</h4>
                    <p className="text-primary font-medium">96% Elite Gold</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Completed with distinction, demonstrating strong understanding of Internet of Things concepts and applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-cyber text-lg font-semibold text-foreground">NPTEL - Programming in Java</h4>
                    <p className="text-secondary font-medium">62% Elite</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Successfully completed Java programming course, strengthening object-oriented programming skills.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* View Certificates Button */}
          <div className="text-center mt-8">
             <a 
              href="/iot_java_merged.pdf" 
              download="Arshullah_Certificate.pdf"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transform transition-all duration-300 hover:scale-105 glass-effect"
              >
                Download Certificates
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded w-[90vw] h-[90vh] relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              ✖
            </button>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl="/iot_java_merged.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
