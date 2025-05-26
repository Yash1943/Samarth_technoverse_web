"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Team() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate professionals dedicated to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className={cn(
                "overflow-hidden border transition-all duration-300",
                hoveredId === member.id && "shadow-lg border-primary/20"
              )}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredId === member.id && "scale-110"
                  )}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{member.position}</p>
                <p className="text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}