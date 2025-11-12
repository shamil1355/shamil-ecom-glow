import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  "Artificial Intelligence - NoviTech R&D Pvt Ltd (2025)",
  "Project to Product - Eranad Knowledge City (2024)",
  "VLSI System on Chip Design - Maven Silicon (2024)",
  "Enterprise Data Science - IBM (2024)",
  "Scientific Computing & Data Science Using Python - EKC (2023)",
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certifications & <span className="text-gradient">Training</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Continuous learning through industry-recognized programs
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center gap-3 glass-card p-4 rounded-lg hover:glow-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
