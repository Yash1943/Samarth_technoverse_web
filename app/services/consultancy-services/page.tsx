import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Lightbulb, Target, TrendingUp, Users, Shield, Cog } from "lucide-react";

export default function ConsultancyServicesPage() {
  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Digital Transformation Strategy",
      description: "Comprehensive roadmaps to modernize your business processes and technology infrastructure."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Technology Assessment",
      description: "Evaluate your current tech stack and identify opportunities for improvement and optimization."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "IT Team Augmentation",
      description: "Scale your development team with our experienced professionals on-demand."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity Consulting",
      description: "Protect your business with comprehensive security assessments and implementation strategies."
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through technology-driven solutions."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Workshops",
      description: "Collaborative sessions to identify new opportunities and innovative solutions for your business."
    }
  ];

  const expertise = [
    {
      area: "Cloud Migration",
      description: "Seamless transition to cloud platforms with minimal downtime",
      benefits: ["Cost reduction", "Scalability", "Enhanced security"]
    },
    {
      area: "Data Analytics",
      description: "Transform raw data into actionable business insights",
      benefits: ["Better decisions", "Trend identification", "Performance optimization"]
    },
    {
      area: "DevOps Implementation",
      description: "Streamline development and deployment processes",
      benefits: ["Faster delivery", "Improved quality", "Reduced costs"]
    },
    {
      area: "Legacy System Modernization",
      description: "Upgrade outdated systems without disrupting operations",
      benefits: ["Improved performance", "Better integration", "Reduced maintenance"]
    }
  ];

  const approach = [
    {
      phase: "Assessment",
      description: "Comprehensive analysis of your current technology landscape and business processes",
      duration: "1-2 weeks"
    },
    {
      phase: "Strategy Development",
      description: "Create detailed roadmap with prioritized recommendations and implementation timeline",
      duration: "2-3 weeks"
    },
    {
      phase: "Implementation Planning",
      description: "Develop detailed project plans with resource allocation and risk mitigation strategies",
      duration: "1-2 weeks"
    },
    {
      phase: "Execution Support",
      description: "Ongoing guidance and support throughout the implementation process",
      duration: "Ongoing"
    }
  ];

  const industries = [
    { name: "Healthcare", projects: "25+" },
    { name: "Finance", projects: "30+" },
    { name: "Manufacturing", projects: "20+" },
    { name: "Retail", projects: "15+" },
    { name: "Education", projects: "18+" },
    { name: "Government", projects: "12+" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Expert Guidance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technology Consultancy Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Navigate the complex technology landscape with confidence. Our expert consultants provide strategic guidance to help you make informed decisions and achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Technology Consulting"
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
              Comprehensive Consultancy Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy development to implementation support, we provide end-to-end consultancy services.
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

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep knowledge across various technology domains to address your specific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{item.area}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Consultancy Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured methodology that ensures comprehensive analysis and actionable recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <Badge variant="secondary">{phase.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {phase.description}
                  </CardDescription>
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
              Industry Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven track record across diverse industries with deep understanding of sector-specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                  <p className="text-2xl font-bold text-primary">{industry.projects}</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from our consultancy engagements across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <h3 className="font-semibold mb-2">Cost Reduction</h3>
                <p className="text-muted-foreground">Average cost savings achieved through our optimization strategies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <h3 className="font-semibold mb-2">Faster Delivery</h3>
                <p className="text-muted-foreground">Improvement in project delivery times after process optimization</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <h3 className="font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-muted-foreground">Of our clients report significant business improvements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert guidance to navigate your technology challenges and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Download Methodology Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}