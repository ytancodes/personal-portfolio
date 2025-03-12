import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Learning() {
  const learningPlans = [
    {
      title: "Advanced Machine Learning",
      description: "Deep dive into neural networks and deep learning",
      progress: 65,
      goals: [
        "Complete Stanford's CS231n course",
        "Build 3 ML projects",
        "Contribute to open-source ML libraries",
      ],
    },
    {
      title: "Cloud Architecture",
      description: "Master cloud-native application development",
      progress: 40,
      goals: [
        "AWS Solutions Architect certification",
        "Implement serverless architectures",
        "Study distributed systems",
      ],
    },
    {
      title: "Mobile Development",
      description: "Learn cross-platform mobile development",
      progress: 25,
      goals: [
        "Master React Native",
        "Build an iOS/Android app",
        "Study mobile UX principles",
      ],
    },
  ];

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Learning Plans</h1>
        
        <div className="space-y-6">
          {learningPlans.map((plan) => (
            <Card key={plan.title}>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{plan.progress}%</span>
                    </div>
                    <Progress value={plan.progress} />
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Goals:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {plan.goals.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}