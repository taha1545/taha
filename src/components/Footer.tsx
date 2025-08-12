import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Taha</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Network Engineer passionate about creating robust, secure web solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">API Development</span>
              <span className="text-muted-foreground">Mobile Backends</span>
              <span className="text-muted-foreground">Network Security</span>
              <span className="text-muted-foreground">System Architecture</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Taha. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;