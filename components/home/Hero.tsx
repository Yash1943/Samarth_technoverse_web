"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Lightbulb, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "ERP Solutions",
    icon: <Database className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  {
    title: "Web & App Development",
    icon: <Code className="h-6 w-6" />,
    color: "from-teal-500 to-emerald-600",
    delay: 200,
  },
  {
    title: "Consultancy Services",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "from-amber-500 to-orange-600",
    delay: 400,
  },
  {
    title: "Automation Solutions",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    delay: 600,
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative flex justify-center overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent opacity-90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-teal-500 rounded-full filter blur-[120px] opacity-20" />
      </div>

      {/* Hero content */}
      <div className="container relative pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 transition-all duration-700 ease-out",
              visible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            )}
          >
            Transforming Businesses Through{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Innovative Technology
            </span>
          </h1>
          <p
            className={cn(
              "text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ease-out",
              visible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            )}
          >
            Custom ERP solutions, web & app development, and expert technology
            consultancy to drive your business forward.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-700 delay-400 ease-out",
              visible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            )}
          >
            <Link href="/contact">
              <Button size="lg" className="text-md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-md">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={cn(
                  "group relative bg-card hover:bg-gradient-to-br rounded-lg shadow-md border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  `hover:${solution.color}`,
                  "transition-all duration-700 ease-out",
                  visible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                )}
                style={{
                  transitionDelay: `${solution.delay + 600}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0"></div>
                <div className="relative z-10">
                  <div
                    className={cn(
                      "inline-flex p-3 rounded-lg bg-muted mb-4 transition-colors duration-300"
                    )}
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/services/${solution.title
                        .toLowerCase()
                        .replace(/&/g, "")
                        .replace(/ /g, "-")}`}
                      className="inline-flex items-center text-sm font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}