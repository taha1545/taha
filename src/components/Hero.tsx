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
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-3xl animate-float1" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 bg-gradient-to-tr from-secondary/40 to-primary/30 rounded-full blur-3xl animate-float2" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float3" style={{transform:'translate(-50%,-50%)'}} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent" />
      </div>
      <style>{`
        .glass-card {
          background: #181f2a;
          border-radius: 1.5rem;
          border: 1.5px solid rgba(255,255,255,0.10);
          position: relative;
          overflow: hidden;
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes float1 { 0%{transform:translateY(0);} 50%{transform:translateY(-30px);} 100%{transform:translateY(0);} }
        @keyframes float2 { 0%{transform:translateY(0);} 50%{transform:translateY(40px);} 100%{transform:translateY(0);} }
        @keyframes float3 { 0%{transform:translateX(0);} 50%{transform:translateX(-30px);} 100%{transform:translateX(0);} }
        .animate-float1 { animation: float1 7s ease-in-out infinite; }
        .animate-float2 { animation: float2 9s ease-in-out infinite; }
        .animate-float3 { animation: float3 11s ease-in-out infinite; }
      `}</style>
      <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary drop-shadow-lg">
            Hi, I'm <span className="text-glow text-white">Taha Mansouri</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-7 text-secondary-foreground font-semibold tracking-tight">
            Full-Stack Developer & Network Engineer
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Based in <span className="text-primary font-bold">Algeria</span> with over <span className="text-primary font-bold">4 years</span> of experience building fast, secure API servers and scalable full-stack web applications.<br/>
            My networking background enhances my ability to create <span className="text-primary font-bold">robust</span> and <span className="text-primary font-bold">secure</span> digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="hero-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold shadow-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg"
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
    </section>
  );
};

export default Hero;