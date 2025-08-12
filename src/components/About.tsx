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
                  alt="Alex Johnson - Full-Stack Developer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-4">Full-Stack Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My passion lies 
              in building user-centric solutions that make a real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked with startups and established companies, helping them transform 
              their ideas into robust digital products. My expertise spans both frontend 
              and backend development, with a keen eye for design and user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;