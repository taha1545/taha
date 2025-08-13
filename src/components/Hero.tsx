import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/test.gif";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6  text-gray-200">
            Hi, I'm <span className="text-glow text-gray-200">Taha Mansouri</span>
          </h1>
          <h2 className="text-white text-2xl md:text-3xl mb-8 text-muted-foreground">
            Full-Stack Developer & Network Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Based in Algeria with over 4 years of experience building fast, secure API servers and scalable full-stack web applications.
            My networking background enhances my ability to create robust and secure digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="hero-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg "
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/taha1545"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-primary transition-colors hover:text-black"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/taha-mohamed-mansouri-15a99924b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-primary transition-colors hover:text-black"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>

            <a
              href="mailto:mansouritaha675@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-primary transition-colors hover:text-black"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;