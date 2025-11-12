import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Eranad Knowledge City Technical Campus",
    duration: "Sep 2022 - Oct 2026",
    grade: "Manjeri, Kerala",
    highlights: [
      "Comprehensive program focusing on analog and digital electronics, communication systems, and signal processing",
      "Key Skills: 8051 Microcontroller, HDL, Embedded Software, C Programming, Python, MCU Architecture",
      "Encourages innovation through research projects, practical training, and industry connections",
    ],
    societies: ["NSS", "IEDC", "IEEE"],
  },
  {
    degree: "Higher Secondary Education - Computer Science",
    institution: "Darul Uloom Higher Secondary School (HSS) Panakkad",
    duration: "Jun 2020 - Mar 2022",
    grade: "Kerala, India",
    highlights: [
      "Solid foundations in computer science including programming and database management",
      "Hands-on learning in web technologies and coding challenges",
      "Built analytical and problem-solving skills through practical projects",
    ],
    societies: ["Computer Science Club"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Academic <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building a strong foundation in electronics and communication engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="glass-card p-8 hover:glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">
                      {edu.duration}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      • {edu.grade}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {edu.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {edu.societies.map((society) => (
                  <Badge
                    key={society}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {society}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
