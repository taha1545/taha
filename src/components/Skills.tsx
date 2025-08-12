import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "PHP", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "API Development", level: 95 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 92 },
        { name: "Java", level: 80 },
      ]
    }
  ];

  const technologies = [
    { name: "Laravel", icon: "🔧" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "PHP", icon: "🐘" },
    { name: "Express", icon: "🚀" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📂" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Technology Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-16 animate-slide-up">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="hover:scale-105 transition-transform duration-300 bg-skill-bg border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-sm font-medium text-muted-foreground">{tech.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="animate-slide-up bg-card border-primary/20"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
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
    </section>
  );
};

export default Skills;