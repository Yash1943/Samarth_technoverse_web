import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/constants";
import Team from "@/components/home/Team";
import { ArrowRight, CheckCircle, Award, Users, Globe, Clock } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success is our success.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to stay ahead.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Reliability",
      description: "We deliver on our promises and build long-term relationships based on trust.",
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30 p-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Samarth Technoverse
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're on a mission to help businesses leverage technology to achieve their full potential.
              </p>
              <p className="mb-4">
                Founded in 2025, Samarth Technoverse has grown from a small team of passionate tech enthusiasts to a comprehensive IT solutions provider serving clients across multiple industries.
              </p>
              <p className="mb-6">
                Our team of experts brings together decades of combined experience in software development, ERP implementation, and technology consultancy, allowing us to deliver innovative solutions that drive real business results.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Connect With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 bg-muted">
                <div className="aspect-square relative">
                  <Image
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Business meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Development team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Creative thinking"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <Card key={stat.id} className="border-0 bg-transparent">
                <CardContent className="p-6">
                  <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Samarth Technoverse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Samarth Technoverse?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expertise & Experience</h3>
                    <p className="text-muted-foreground">
                      Our team brings decades of combined experience across various technologies and industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      We don't believe in one-size-fits-all. Every solution we deliver is customized to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">End-to-End Service</h3>
                    <p className="text-muted-foreground">
                      From initial consultation to ongoing support, we're with you at every step of your technology journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Client Success Focus</h3>
                    <p className="text-muted-foreground">
                      Your success is our success. We measure our achievements by the results we deliver for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg border">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Discovery & Assessment</h4>
                        <p className="text-muted-foreground">
                          Understanding your business, challenges, and goals
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Strategic Planning</h4>
                        <p className="text-muted-foreground">
                          Developing a roadmap aligned with your objectives
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Solution Development</h4>
                        <p className="text-muted-foreground">
                          Creating and implementing tailored technology solutions
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">Continuous Support</h4>
                        <p className="text-muted-foreground">
                          Providing ongoing maintenance and optimization
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}