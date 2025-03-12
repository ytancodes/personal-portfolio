import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Education</h1>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-2">
                Master of Computer Science
              </h2>
              <p className="text-muted-foreground mb-2">
                Stanford University (2018-2020)
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Specialized in Machine Learning and AI</li>
                <li>4.0 GPA</li>
                <li>Teaching Assistant for Data Structures course</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-2">
                Bachelor of Science in Computer Engineering
              </h2>
              <p className="text-muted-foreground mb-2">
                MIT (2014-2018)
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Minor in Mathematics</li>
                <li>Dean's List all semesters</li>
                <li>President of Computer Science Club</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}