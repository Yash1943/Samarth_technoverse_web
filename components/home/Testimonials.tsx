"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { get_client_experience } from "@/app/api/fetchData";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://10.10.10.165:8001";

interface ClientExperience {
  client_name: string;
  position: string;
  photo: string;
  company: string;
  experience: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<ClientExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await get_client_experience();
        if (response.message) {
          setTestimonials(response.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 flex justify-center">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about their experience working with
            Samarth Technoverse.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="border bg-card h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 text-primary">
                        <Quote className="h-8 w-8 opacity-50" />
                      </div>
                      <p className="text-muted-foreground mb-6 italic">
                        &ldquo;{testimonial.experience}&rdquo;
                      </p>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.photo.startsWith('http') ? testimonial.photo : `${BASE_URL}${testimonial.photo}`}
                            alt={testimonial.client_name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.client_name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}