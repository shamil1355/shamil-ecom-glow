import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ECE Student • Embedded Systems & Robotics Enthusiast";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background with pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold">
              Mohammed <br />
              <span className="text-gradient">Shamil K P</span>
            </h1>
            
            <div className="h-8 flex items-center">
              <p className="text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              I build intelligent systems that bridge the gap between hardware and software — 
              from face-recognition attendance systems to robotic prototypes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-primary glow-primary hover:scale-105 transition-transform"
                asChild
              >
                <a href="#projects">
                  See My Projects
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="#contact">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
              <img
                src={profileImage}
                alt="Mohammed Shamil K P"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/50 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};
