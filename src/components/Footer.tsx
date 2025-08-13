import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 w-full">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8 w-full ">

          <div className="space-y-4 md:w-1/3">
            <h3 className="text-2xl font-bold text-primary">Taha</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Network Engineer passionate about creating robust, secure web solutions.
            </p>
            <div className="flex space-x-4">

              <a
                href="https://github.com/taha1545"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-100 hover:text-primary transition-colors hover:text-black"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://linkedin.com/in/taha-mohamed-mansouri-15a99924b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-100 hover:text-primary transition-colors hover:text-black"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="mailto:mansouritaha675@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-100 hover:text-primary transition-colors hover:text-black"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>


          <div className="space-y-4 md:w-1/3 flex flex-col md:ml-[10%]">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:bg-transparent hover:text-white transition-colors"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:bg-transparent hover:text-white transition-colors"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:bg-transparent hover:text-white transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:bg-transparent hover:text-white transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </div>
          </div>


          {/* Services */}
          <div className="space-y-4 md:w-1/3">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">API Development</span>
              <span className="text-muted-foreground">web development</span>
              <span className="text-muted-foreground">Network Security</span>
              <span className="text-muted-foreground">System Architecture</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Taha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;