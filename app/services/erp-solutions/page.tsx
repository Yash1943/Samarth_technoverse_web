import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Database, Users, BarChart3, Shield, Zap, Globe } from "lucide-react";

export default function ERPSolutionsPage() {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Centralized Data Management",
      description: "Unify all your business data in one secure, accessible platform for better decision-making."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Department Integration",
      description: "Seamlessly connect HR, Finance, Inventory, Sales, and Operations in one system."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Get instant insights with comprehensive reporting and dashboard capabilities."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access controls and data encryption."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cloud & On-Premise",
      description: "Flexible deployment options to match your infrastructure requirements."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30%",
    "Improve data accuracy by 95%",
    "Increase productivity by 40%",
    "Faster decision-making with real-time insights",
    "Streamlined compliance and reporting",
    "Enhanced customer satisfaction"
  ];

  const industries = [
    "Manufacturing", "Healthcare", "Retail", "Education", 
    "Construction", "Logistics", "Finance", "Government"
  ];

  const modules = [
    {
      name: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting"
    },
    {
      name: "Human Resources",
      description: "Employee management, payroll, and performance tracking"
    },
    {
      name: "Inventory Management",
      description: "Stock control, procurement, and supply chain optimization"
    },
    {
      name: "Customer Relationship Management",
      description: "Sales pipeline, customer service, and marketing automation"
    },
    {
      name: "Project Management",
      description: "Resource allocation, timeline tracking, and collaboration tools"
    },
    {
      name: "Business Intelligence",
      description: "Advanced analytics, reporting, and data visualization"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Enterprise Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom ERP Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business operations with our comprehensive ERP solutions designed to streamline processes, improve efficiency, and drive growth across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="ERP Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Complete Business Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Our ERP solutions come packed with features designed to address every aspect of your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our ERP Solutions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our ERP systems are designed to deliver measurable results and transform your business operations from day one.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business Growth"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive ERP Modules
            </h2>
            <p className="text-lg text-muted-foreground">
              Our modular approach allows you to implement exactly what you need, when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{module.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Our ERP solutions are tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our ERP solutions can streamline your operations and drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Free Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}