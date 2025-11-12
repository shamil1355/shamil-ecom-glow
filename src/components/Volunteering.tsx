import { Card } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

const volunteering = [
  {
    organization: "National Service Scheme (NSS)",
    role: "Active Volunteer",
    icon: Users,
    description:
      "Participated in community service, awareness drives, and campus sustainability programs. Engaged in various social initiatives to contribute positively to the community.",
  },
  {
    organization: "Indian Red Cross Society (JRC Cadet)",
    role: "Youth Member (2018-2020)",
    icon: Heart,
    description:
      "Involved in youth health and humanitarian activities. Participated in first aid training programs and health awareness campaigns in local communities.",
  },
];

export const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Community <span className="text-gradient">Service</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Giving back to society through active volunteering and social initiatives
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {volunteering.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={activity.organization}
                className="glass-card p-8 hover:glow-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {activity.organization}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {activity.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
