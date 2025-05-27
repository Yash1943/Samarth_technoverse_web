"use client";

import Link from "next/link";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, Lightbulb, Cpu, CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const icons = {
  code: <Code className="h-10 w-10" />,
  database: <Database className="h-10 w-10" />,
  lightbulb: <Lightbulb className="h-10 w-10" />,
  cpu: <Cpu className="h-10 w-10" />,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30 p-4 flex justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions tailored to transform your business and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
              >
                <Card className="group border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="mb-4 p-2 bg-primary/5 rounded-lg w-fit">
                      {icons[service.icon as keyof typeof icons]}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 flex justify-center">
        <div className="container">
          <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Not Sure Which Service Is Right For You?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our experts can help you identify the perfect solution for your specific business needs. Schedule a free consultation today.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8 md:p-12 text-white flex items-center rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Understand</p>
                        <p className="text-white/80">We start by understanding your business challenges and goals</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Strategize</p>
                        <p className="text-white/80">We develop a tailored strategy to address your specific needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Implement</p>
                        <p className="text-white/80">We deliver high-quality solutions with attention to detail</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Support</p>
                        <p className="text-white/80">We provide ongoing support to ensure long-term success</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}