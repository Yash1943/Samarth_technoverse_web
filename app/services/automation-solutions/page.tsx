import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Cpu, Bot, Workflow, Clock, TrendingUp, Shield } from "lucide-react";

export default function AutomationSolutionsPage() {
  const solutions = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Business Process Automation",
      description: "Streamline repetitive tasks and workflows to increase efficiency and reduce human error."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Robotic Process Automation (RPA)",
      description: "Deploy software robots to handle rule-based tasks across multiple applications and systems."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational agents for customer service, support, and internal operations."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Document Processing Automation",
      description: "Automatically extract, process, and validate data from documents and forms."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Test Automation",
      description: "Automated testing frameworks to ensure software quality and accelerate development cycles."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Automation",
      description: "Ensure regulatory compliance through automated monitoring and reporting systems."
    }
  ];

  const benefits = [
    {
      metric: "70%",
      title: "Time Savings",
      description: "Average reduction in manual task completion time"
    },
    {
      metric: "95%",
      title: "Accuracy Improvement",
      description: "Reduction in human errors through automation"
    },
    {
      metric: "50%",
      title: "Cost Reduction",
      description: "Lower operational costs through process optimization"
    },
    {
      metric: "24/7",
      title: "Availability",
      description: "Round-the-clock operation without breaks or downtime"
    }
  ];

  const useCases = [
    {
      industry: "Finance",
      process: "Invoice Processing",
      description: "Automated invoice extraction, validation, and approval workflows",
      impact: "80% faster processing, 95% accuracy"
    },
    {
      industry: "Healthcare",
      process: "Patient Onboarding",
      description: "Streamlined patient registration and insurance verification",
      impact: "60% reduction in wait times"
    },
    {
      industry: "Manufacturing",
      process: "Quality Control",
      description: "Automated defect detection and quality assurance processes",
      impact: "40% improvement in quality metrics"
    },
    {
      industry: "Retail",
      process: "Inventory Management",
      description: "Real-time stock monitoring and automated reordering",
      impact: "30% reduction in stockouts"
    }
  ];

  const technologies = [
    { name: "UiPath", category: "RPA Platform" },
    { name: "Blue Prism", category: "RPA Platform" },
    { name: "Microsoft Power Automate", category: "Workflow Automation" },
    { name: "Zapier", category: "Integration Platform" },
    { name: "Selenium", category: "Test Automation" },
    { name: "TensorFlow", category: "AI/ML Framework" },
    { name: "Python", category: "Programming Language" },
    { name: "Node.js", category: "Backend Development" }
  ];

  const implementation = [
    {
      phase: "Process Analysis",
      description: "Identify and analyze current processes to determine automation opportunities",
      deliverables: ["Process mapping", "ROI analysis", "Automation roadmap"]
    },
    {
      phase: "Solution Design",
      description: "Design automation workflows and select appropriate technologies",
      deliverables: ["Technical specifications", "Architecture design", "Implementation plan"]
    },
    {
      phase: "Development & Testing",
      description: "Build, test, and refine automation solutions in controlled environments",
      deliverables: ["Automation scripts", "Test results", "User documentation"]
    },
    {
      phase: "Deployment & Training",
      description: "Deploy solutions and train users for optimal adoption and maintenance",
      deliverables: ["Production deployment", "User training", "Support documentation"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Smart Automation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent Automation Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business operations with cutting-edge automation technologies. Reduce manual work, eliminate errors, and accelerate processes while your team focuses on strategic initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Automate Your Processes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  See Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <Image
                  src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Automation Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From simple task automation to complex AI-driven processes, we provide solutions for every business need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">{solution.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Our automation solutions deliver quantifiable results that directly impact your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how automation has transformed operations across different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{useCase.industry}</Badge>
                    <Badge variant="outline">{useCase.process}</Badge>
                  </div>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-1">Impact Achieved:</h4>
                    <p className="text-sm">{useCase.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automation Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground">
              We leverage industry-leading tools and platforms to deliver robust automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured approach that ensures successful automation deployment with minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementation.map((phase, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <CardDescription className="text-base">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Deliverables:</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your Automation ROI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover the potential cost savings and efficiency gains automation can bring to your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Immediate Cost Savings</h3>
                    <p className="text-muted-foreground">Reduce labor costs and operational expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Improved Accuracy</h3>
                    <p className="text-muted-foreground">Eliminate costly errors and rework</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Faster Processing</h3>
                    <p className="text-muted-foreground">Complete tasks in fraction of the time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ROI Analysis"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your automation journey today and unlock the full potential of your business operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Automation Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Download ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}