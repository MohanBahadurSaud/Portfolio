import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useTypeWriter } from "../hooks/useTypeWriter";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  const { displayedText, cursorVisible } = useTypeWriter([
    "Frontend Developer",
    "UI/UX Enthusiast",
  ]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
            </div>

            {/* Headline */}
            <div className="space-y-4">
              {/* Typing Effect - Static + Dynamic profession */}
              <div className="animate-fade-in">
                <h1 className="leading-tight">
                  <div className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-foreground">
                    Hi, Myself
                  </div>

                  <div className="mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground lg:whitespace-nowrap">
                    Mohan Bahadur Saud
                  </div>

                  <div className="mt-3 text-lg sm:text-xl md:text-4xl lg:text-4xl font-semibold text-foreground flex items-center flex-wrap">
                    <span>And I'm a&nbsp;</span>
                    <span className="text-primary">{displayedText}</span>
                    <span
                      className={`inline-block w-1 h-6 sm:h-7 md:h-10 lg:h-10 ml-2 bg-primary transition-opacity ${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                A passionate Frontend Developer & UI/UX Designer focused on building modern, responsive, and user-friendly web applications using React, JavaScript, and Tailwind CSS. I love designing clean UI, enhancing user experience, and turning ideas into real-world digital products.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1xJnfskh02AQM4PnAizGGwEaA4Y0V8nA2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              {/* <span className="text-sm text-muted-foreground">Follow me: </span> */}
              {[
                { icon: Github, href: "https://github.com/MohanBahadurSaud" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohan-bahadur-saud" },
              
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative rounded-3xl overflow-hidden p-0">
                  <img
                    src="/profile-photo.svg"
                    alt="Profile"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
