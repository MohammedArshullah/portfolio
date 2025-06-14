
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MohammedArshullah",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-arshullah-39b811253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mdarshullah821@gmail.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cyber text-3xl md:text-4xl font-bold text-transparent bg-clip-text gradient-cyber mb-6">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Ready to bring innovative ideas to life. Let's discuss how I can contribute to your team!
        </p>

        {/* Resume Download Section */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="text-center sm:text-left">
                <h3 className="font-cyber text-xl font-semibold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground">
                  Get a detailed overview of my experience, projects, and skills.
                </p>
              </div>
               <a 
  href="/resume.pdf" 
  download="Arshullah_Resume.pdf"
  target="_blank" 
  rel="noopener noreferrer"
>
              <Button className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transform transition-all duration-300 hover:scale-105 animate-glow">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download PDF
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button> </a>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`group relative p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-110 ${link.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Open to internship opportunities and exciting projects

          </p>
          

          <a 
  href="mailto:mdarshullah821@gmail.com" 
  
  target="_blank" 
  className="inline-block mt-2" 
  
>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-3 text-lg font-semibold transform transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-3" />
            Get In Touch
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
