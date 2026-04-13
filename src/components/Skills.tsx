import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Figma", level: 60 },
        { name: "Git", level: 100 },
        { name: "postman", level: 100 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Laravel", level: 90 },
        { name: "System Design", level: 85 },
        { name: "Kafka", level: 75 },
        { name: "RabbitMQ", level: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Networking", level: 100 },
        { name: "System Administration", level: 85 },
        { name: "GCP", level: 80 },
        { name: "Terraform", level: 80 },
        { name: "Automation", level: 85 },
      ],
    },
  ];

  const technologies = [
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "▲" },
    { name: "Kafka", icon: "📡" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "GCP", icon: "🌐" },
    { name: "Networking", icon: "🔗" },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-bar-animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 bg-background flex justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cloud, backend systems, and modern software engineering stack
          </p>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mb-16 md:max-w-[80vw] md:pl-[10%]">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="glass-card fade-in-up group has-tooltip"
              style={{
                animationDelay: `${index * 100 + 200}ms`,
                animationDuration: "0.8s",
                position: "relative",
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3 tech-icon cursor-pointer select-none">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-gray-200">
                  {tech.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="glass-card fade-in-up"
              style={{
                animationDelay: `${categoryIndex * 200 + 400}ms`,
                animationDuration: "0.8s",
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-secondary/40 rounded-full h-2 overflow-hidden">
                        <div
                          ref={(el) =>
                          (skillRefs.current[
                            categoryIndex * 10 + skillIndex
                          ] = el)
                          }
                          className="hero-gradient h-2 rounded-full skill-bar"
                          style={{
                            ["--bar-width"]: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ONLY animation logic (no color change) */}
      <style>{`
        .skill-bar {
          width: 0;
          transition: width 1.2s cubic-bezier(.4,2,.6,1);
        }
        .skill-bar-animate {
          width: var(--bar-width);
        }
      `}</style>
    </section>
  );
};

export default Skills;
