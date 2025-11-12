import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shamilkp4729@gmail.com",
    href: "mailto:shamilkp4729@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8129664729",
    href: "tel:+918129664729",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manjeri, Kerala, India",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shamil1355",
    href: "https://github.com/shamil1355",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohammed-shamil-536880227",
    href: "https://www.linkedin.com/in/mohammed-shamil-536880227",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bio Card */}
          <Card className="glass-card p-8 space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gradient">Hello!</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am an engineering student specializing in Electronics and Communication 
              Engineering, with hands-on experience in embedded programming, robotics design, 
              and hardware–software integration. I enjoy creating real-world solutions using 
              microcontrollers, sensors, and intelligent automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I actively participate in hackathons, NSS volunteering, and 
              student innovation clubs, constantly exploring how electronics and AI can improve 
              daily life.
            </p>
          </Card>

          {/* Contact Info Card */}
          <Card className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-3 rounded-lg"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
