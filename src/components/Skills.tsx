import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Tools",
    icon: Code,
    skills: [
      "Embedded C",
      "Python",
      "MATLAB",
      "Arduino IDE",
      "OpenCV",
      "C Programming",
      "MCU Architecture",
    ],
  },
  {
    title: "Hardware Platforms",
    icon: Cpu,
    skills: [
      "ESP32 / ESP32-CAM",
      "Raspberry Pi",
      "8051 Microcontroller",
      "Sensors & Actuators",
      "PCB Design",
      "Circuit Debugging",
    ],
  },
  {
    title: "Domains",
    icon: Brain,
    skills: [
      "Robotics",
      "Embedded Systems",
      "VLSI (Basics)",
      "IoT and Automation",
      "AI/ML Fundamentals",
      "HDL",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building innovative solutions across hardware
          and software domains
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
