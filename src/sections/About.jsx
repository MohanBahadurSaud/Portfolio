import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

import Reveal from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <Reveal>
        <div className="container mx-auto px-6 relative z-10">
        {/* Centered heading (middle of section) */}
        <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
                About <span className="me-word">Me</span>
              </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* <div className="animate-fade-in">
                  <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    About <span className="me-word">Me</span>
                  </span>
            </div> */}

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Completed a Bachelor's in Engineering in Information Technology.
                I have hands-on experience in frontend development and
                regularly practice building responsive web applications using
                React, JavaScript, and Tailwind CSS. I have developed multiple
                academic and personal projects to strengthen my practical
                knowledge in modern web development and UI/UX design. Currently,
                I am expanding my skills in advanced frontend technologies and
                actively seeking internship opportunities in Frontend
                Development and UI/UX Design to gain real-world experience and
                grow professionally.
              </p>
              
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build clean, user-focused, and 
                visually appealing digital experiences that solve 
                real-world problems and deliver meaningful value to 
                users."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
};
