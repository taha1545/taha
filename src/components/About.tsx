import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for creating innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="p-8">
                <img 
                  src={profileImage} 
                  alt="Taha - Full-Stack Developer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-4">Full-Stack Developer & Network Engineer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Taha, a full-stack developer and network engineer student based in Algeria, with over 3 years 
              of experience in web development and freelance work. I specialize in building fast, secure API servers 
              and scalable full-stack web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My strong foundation in networking enhances my ability to create robust and secure digital solutions. 
              Proficient in Express, PHP (Laravel), JavaScript, and React, I seamlessly integrate backend logic 
              with intuitive frontend interfaces. My development workflow is powered by tools like Git and Docker, 
              ensuring version control, scalability, and deployment efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a freelancer, I've successfully delivered a wide range of projects—from e-commerce platforms to 
              SaaS websites to applications for data analysis—each tailored to meet unique business needs with 
              precision and performance in mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80+</div>
                <div className="text-muted-foreground">API Endpoints</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;