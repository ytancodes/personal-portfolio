import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer & Software Engineer
          </p>
        </section>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate software engineer with 5+ years of experience building web applications.
              I specialize in React, Node.js, and modern web technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Frontend</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Backend</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Tools</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}