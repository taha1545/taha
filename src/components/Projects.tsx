import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      title: "axeDz  Unified CPaaS Platform",
      description:
        "A scalable CPaaS platform providing SMS, SMTP, cloud storage, and AI model access through a single API key. Designed for Algerian developers with integrated SATIM billing and multi-service orchestration. My role: backend development, system design, and architecture. (Still under development)",
      technologies: ["Node.js", "Microservices", "System Design", "SATIM", "Cloud Architecture"],
      image: "⚙️",
      liveUrl: "#",
      githubUrl: "https://github.com/taha1545/axeDz-Auth.git",
    },

    {
      title: "SchutzStaffel Learning Platform (Gamification System)",
      description:
        "Full task management and gamified learning system with student and teacher dashboards. Includes goals, badges, progress tracking, and engagement mechanics.",
      technologies: ["Next.js", "Node.js", "Gamification", "Dashboard UI", "REST API"],
      image: "🎯",
      liveUrl: "https://schutzstaffel-students.vercel.app/",
      githubUrl: "https://schutzstaffel-teaher.vercel.app/",
    },

    {
      title: "AfrahDZ Event Services API",
      description:
        "Backend API for managing event services like wedding halls, DJs, and event vendors. Built with a secure JWT authentication system and integrated Firebase notifications for real-time updates. Supports SATIM payment gateway for Algerian transactions, advanced filtering and search for service discovery, role-based access control",
      technologies: ["PHP", "MySQL", "Firebase", "SATIM", "Docker"],
      image: "🎉",
      liveUrl: "https://www.afrahdz.com/",
      githubUrl: "https://github.com/taha1545/affrah_dz_api.git",
    },

    {
      title: "Rana Jayin  Ride Sharing Platform",
      description:
        "A ride-sharing and delivery-style platform similar to Yassir with real-time requests and scalable backend.",
      technologies: ["Next.js", "Node.js", "REST API", "Real-time System"],
      image: "🚗",
      liveUrl: "https://rana-jayin-frint.vercel.app/",
      githubUrl: "https://github.com/taha1545/rana-jayin.git",
    },

    {
      title: "Yaqin  Student Progress Tracking System",
      description:
        "Educational platform for tracking student progress, assignments, and performance analytics for parents and schools.",
      technologies: ["Laravel", "MySQL", "Analytics", "Backend System"],
      image: "📚",
      liveUrl: "https://yaqin-front.vercel.app/",
      githubUrl: "https://github.com/taha1545/yaqin.git",
    },

    {
      title: "E-Commerce Backend System",
      description:
        "Scalable e-commerce backend API with authentication, product management, and admin dashboard.",
      technologies: ["Laravel", "REST API", "Sanctum", "Redis"],
      image: "🛍️",
      liveUrl: "https://ecomedz-main-q2dm5d.laravel.cloud/",
      githubUrl: "https://github.com/taha1545/ecome-api.git",
    },
  ];

  const isValidUrl = (url) => url && url !== "#";

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Important Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key systems I’ve built across backend engineering, system design, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group h-full flex flex-col hover:scale-105 transition-all duration-300 animate-slide-up bg-card border-primary/20 hover:shadow-xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >

              <CardHeader className="flex flex-col items-center">
                <div className="text-6xl mb-4">{project.image}</div>
                <CardTitle className="text-xl text-primary group-hover:text-glow transition-all text-center">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-4 text-center">

                <p className="text-muted-foreground leading-relaxed flex-1">
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

                {/* BUTTONS ALWAYS AT BOTTOM */}
                <div className="flex gap-3 pt-4 mt-auto">

                  {isValidUrl(project.liveUrl) ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full hero-gradient text-white hover:opacity-90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" className="w-full" disabled>
                      Live Demo
                    </Button>
                  )}

                  {isValidUrl(project.githubUrl) ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      <Github className="h-4 w-4" />
                    </Button>
                  )}

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
