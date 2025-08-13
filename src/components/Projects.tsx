import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AfrahDZ Event Services API",
      description:
        "Complete backend API for a mobile app managing event services like wedding halls and DJs. Features JWT authentication, Firebase notifications, SATIM payments, coin-based rewards, and complex announcement filtering with location-based suggestions.",
      technologies: ["PHP", "MySQL", "Firebase", "SATIM", "Docker"],
      image: "🎉",
      liveUrl: "https://www.afrahdz.com/",
      githubUrl: "https://github.com/taha1545/affrah_dz_api.git",
    },
    {
      title: "Algerian E-Commerce API",
      description:
        "Developed a robust RESTful API for a modern e-commerce platform using Laravel 12. Features include authentication with Sanctum, Google OAuth, real-time notifications, SATIM payment gateway integration, and comprehensive admin analytics with 80+ endpoints.",
      technologies: ["Laravel 12", "Redis", "Sanctum", "SATIM SDK"],
      image: "🛍️",
      liveUrl: "https://ecomedz-main-q2dm5d.laravel.cloud/",
      githubUrl: "https://github.com/taha1545/ecome-api.git",
    },
    {
      title: "Psycho Assistance Mobile App",
      description:
        "A mobile solution for mental health clinics with dual backend modules: a social system for psychologists to share experiences and a patient folder management system. Includes PDF generation, real-time syncing, and role-based access control.",
      technologies: ["Laravel", "PostgreSQL", "Pusher", "PDF Generator"],
      image: "🧠",
      liveUrl: "https://psy-assiste-1.onrender.com",
      githubUrl: "https://github.com/taha1545/psy-assiste.git",
    },
    {
      title: "Bazooka Restaurant API",
      description:
        "Smart ordering system for Algerian fast-food chain connecting clients, delivery staff, and admins. Real-time order tracking with WebSockets, menu management, analytics dashboard, and role-based access for seamless restaurant operations.",
      technologies: ["Laravel 12", "Pusher", "Sanctum", "FCM"],
      image: "🍔",
      liveUrl: "#",
      githubUrl: "https://github.com/taha1545/bazooka.git",
    },
    {
      title: "ISP Client Data Analyzer",
      description:
        "Java desktop application for an Algerian ISP to analyze monthly CSV client data. Features automatic data import, advanced filtering by customer details, real-time calculations, and export functionality, replacing manual Excel workflows.",
      technologies: ["Java", "Swing", "OpenCSV", "Maven"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Network Infrastructure Projects",
      description:
        "Various networking projects leveraging my network engineering background to create robust, secure, and scalable backend solutions. Focus on API security, database optimization, and system architecture design. i test alot of  solutions. to make sure they are secure and scalable.",
      technologies: ["Network Security", "System Architecture", "API Design"],
      image: "🌐",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring
            ideas to life
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
                <CardTitle className="text-xl text-primary group-hover:text-glow transition-all text-center">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full hero-gradient text-white hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
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
