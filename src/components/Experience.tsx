import { Card } from "@/components/ui/card";
import { Briefcase, CircleDot } from "lucide-react";

const experiences = [
  {
    role: "Embedded Systems & Hardware Lead",
    organization: "Motridox Robotics",
    duration: "Sep 2022 - Present",
    points: [
      "Designed and assembled custom robotic hardware for student-led projects",
      "Programmed and tested embedded systems using microcontrollers and sensors",
      "Integrated hardware and software to create functional prototypes",
      "Represented the team at hackathons including NASA Space Apps Challenge",
      "Achieved 2nd place at Zilkathon Hackathon with innovative robotics solutions",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hands-on experience in robotics, embedded systems, and research
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              className="glass-card p-8 animate-fade-in-left relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-primary mb-2">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.duration}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-muted-foreground">
                        <CircleDot className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
