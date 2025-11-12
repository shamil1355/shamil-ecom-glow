import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Autonomous Delivery Robot",
    timeline: "Jan 2024 - Present",
    description:
      "Developed an autonomous robot using ROS and OpenCV for indoor navigation and package delivery with real-time obstacle detection.",
    tech: ["Python", "ROS", "OpenCV", "Arduino", "Raspberry Pi"],
    github: "https://github.com",
  },
  {
    title: "Smart Home Automation System",
    timeline: "Aug 2023 - Dec 2023",
    description:
      "IoT-based home automation using ESP32 with voice control integration and mobile app for monitoring and control.",
    tech: ["ESP32", "IoT", "Flutter", "Firebase", "Sensors"],
    github: "https://github.com",
  },
  {
    title: "Gesture-Controlled Wheelchair",
    timeline: "Mar 2023 - Jul 2023",
    description:
      "Designed a wheelchair controlled by hand gestures using computer vision and machine learning for enhanced accessibility.",
    tech: ["Python", "TensorFlow", "OpenCV", "Arduino", "ML"],
    github: "https://github.com",
  },
  {
    title: "Real-Time Face Recognition System",
    timeline: "Oct 2022 - Feb 2023",
    description:
      "Built a real-time face recognition system using deep learning with high accuracy for attendance tracking applications.",
    tech: ["Python", "PyTorch", "OpenCV", "Deep Learning", "CNN"],
    github: "https://github.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Innovative solutions combining hardware and software to solve real-world
          problems
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card p-6 hover:scale-105 hover:glow-primary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">{project.timeline}</p>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 group-hover:border-primary transition-colors"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
