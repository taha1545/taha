import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
      image: "🛍️",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TypeScript"],
      image: "📋",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, charts, and weather alerts using external APIs.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      image: "🌤️",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics platform for social media metrics with data visualization, automated reporting, and insights generation.",
      technologies: ["React", "D3.js", "Python", "Django", "MySQL"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, and mortgage calculator functionality.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      image: "🏠",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, quizzes, and progress tracking for students and instructors.",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: "🎓",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:scale-105 transition-all duration-300 animate-slide-up bg-card border-primary/20 hover:shadow-xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <CardTitle className="text-xl text-primary group-hover:text-glow transition-all">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-skill-bg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 hero-gradient text-white hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;