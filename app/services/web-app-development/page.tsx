import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Code, Smartphone, Globe, Zap, Shield, Palette } from "lucide-react";

export default function WebAppDevelopmentPage() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Responsive Web Development",
      description: "Modern, fast-loading websites that work perfectly on all devices and screen sizes."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Progressive Web Apps",
      description: "Combine the best of web and mobile apps with offline functionality and push notifications."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Web Application Security",
      description: "Robust security measures to protect your applications and user data from threats."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes to visualize the user experience and interface design."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your application using best practices while conducting thorough testing throughout."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your application and provide ongoing maintenance, updates, and technical support."
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "Complete online marketplace with vendor management",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Healthcare Management System",
      description: "Patient management and appointment scheduling",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics and reporting platform",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Python", "Docker"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Digital Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web & Mobile App Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create stunning, high-performance web and mobile applications that engage users and drive business growth with our expert development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <Image
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Web Development"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Development Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we provide end-to-end development services for web and mobile applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
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
              Technologies We Master
            </h2>
            <p className="text-lg text-muted-foreground">
              We use cutting-edge technologies and frameworks to build scalable, maintainable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures successful project delivery on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our successful projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Next Application?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into powerful web and mobile applications that drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}