"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section className="py-16 md:py-24 bg-muted/50 flex justify-center">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive IT Services for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how our tailored solutions can transform your business
            operations and drive growth.
          </p>
        </div>

        <Tabs
          defaultValue={services[0].id}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-4xl mx-auto mb-14">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="py-1 text-center"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center lg:px-6">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                      >
                        <div className="mr-2 mt-1 bg-primary/10 rounded-full p-1">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 bg-card rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64 md:h-80 w-full">
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r opacity-20",
                      service.id === "erp-solutions" && "from-blue-600 to-indigo-600",
                      service.id === "web-app-development" && "from-teal-500 to-emerald-600",
                      service.id === "consultancy-services" && "from-amber-500 to-orange-600",
                      service.id === "automation-solutions" && "from-purple-500 to-pink-600"
                    )} />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <h4 className="text-xl font-bold mb-2">
                          {service.caseStudy.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {service.caseStudy.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}