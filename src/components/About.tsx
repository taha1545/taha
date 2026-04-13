import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/me2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 flex justify-center bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16 fade-in-up"
          style={{ animationDelay: "0ms", animationDuration: "0.8s" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for building scalable systems
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Image */}
          <div
            className="fade-in-up"
            style={{ animationDelay: "200ms", animationDuration: "0.8s" }}
          >
            <Card
              style={{
                background: "#181f2a",
                borderRadius: "1.5rem",
                border: "1.5px solid rgba(255,255,255,0.10)",
              }}
            >
              <CardContent className="p-6 h-full">
                <img
                  src={profileImage}
                  alt="Mansouri Taha - Cloud & Networking Engineer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Text */}
          <div
            className="space-y-6 fade-in-up"
            style={{ animationDelay: "400ms", animationDuration: "0.8s" }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">
              Cloud & Networking Engineer 
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm Mansouri Taha, a Cloud and Networking Engineer and Software Developer based in Algeria, with over 4 years of experience building scalable, production-grade systems. I specialize in designing secure, high-performance infrastructure and reliable API systems, bridging the gap between deep networking expertise and modern backend development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My backend work focuses on Node.js (Express), REST APIs, and GraphQL, with hands-on experience in distributed systems using Kafka and RabbitMQ. On the infrastructure side, I design and automate cloud environments using Terraform and Ansible, supported by a solid workflow built on Docker, Git, Linux, and Postman. I also leverage Python for scripting and automation when needed.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a freelancer, I’ve delivered multiple production-ready systems, including e-commerce platforms, SaaS applications, and CPaaS solutions. Each project is built with a strong focus on scalability, performance, and real-world business impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm deeply passionate about system design and continuous learning, and I take pride in architecting robust, efficient solutions that perform reliably under real-world demands.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Freelance Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Frontend Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
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
