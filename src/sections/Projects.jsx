import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Inter College Event Management System",
    description:
      "A web-based platform designed to streamline the organization and participation of events across colleges affiliated with a university.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
    github: "https://github.com/MohanBahadurSaud/Inter-College-Event-Management-System",
  },
  {
    title: "musicPlayer",
    description:
      "A responsive and modern web-based music player inspired by Spotify. Users can browse playlists, play songs, skip music through Seek bar, control the volume, and enjoy a dynamic user interface optimized for all screen sizes.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/MohanBahadurSaud/musicPlayer",
  },
  {
    title: "Collision Detection and Awareness System",
    description:
      "An intelligent system for rear vehicle detection, tracking, and speed estimation using YOLOv8, DeepSORT, and homography.",
    image: "/projects/project3.png",
    tags: ["Python"],
    link: "#",
    github: "https://github.com/MohanBahadurSaud/Collision-Detection-and-Awareness-System",
  },
  {
    title: "Weather App",
    description:
      "Get real-time weather updates for any city, including temperature, humidity, wind speed, and weather conditions.",
    image: "/projects/project4.png",
    tags: ["React", "CSS", "API","Vite"],
    link: "https://mohanbahadursaud.github.io/Weather-App/",
    github: "https://github.com/MohanBahadurSaud/Weather-App",
  },
  {
    title: "ChatBot",
    description:
      "This project demonstrates a small, responsive chat UI with message input, message list, and company/info components.",
    image: "/projects/project5.png",
    tags: ["React", "CSS", "API","Vite"],
    link: "https://mohanbahadursaud.github.io/ChatBot/",
    github: "https://github.com/MohanBahadurSaud/ChatBot",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Centered heading (middle of section) */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
            My <span className="me-word">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
