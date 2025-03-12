import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      github: "https://github.com/johndoe/ecommerce",
      live: "https://ecommerce-demo.com",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application",
      tech: ["React", "TypeScript", "Express", "MongoDB"],
      github: "https://github.com/johndoe/taskmanager",
      live: "https://taskmanager-demo.com",
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with real-time messaging",
      tech: ["React", "Socket.io", "Express", "Redis"],
      github: "https://github.com/johndoe/chat",
      live: "https://chat-demo.com",
    },
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
