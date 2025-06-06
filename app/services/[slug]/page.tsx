import { services } from "@/lib/constants";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Code, Database, Lightbulb, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

const icons = {
    code: <Code className="h-10 w-10" />,
    database: <Database className="h-10 w-10" />,
    lightbulb: <Lightbulb className="h-10 w-10" />,
    cpu: <Cpu className="h-10 w-10" />,
};

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = services.find((s) => s.id === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="py-16 md:py-24 flex justify-center">
            {/* <Button variant="ghost" asChild className="mb-8">
                <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </Button> */}

            <div className="relative max-w-4xl mx-auto min-h-[400px] flex justify-center">
                {/* Background Image */}
                {/* <Image
                    src={service.image || ""}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl opacity-30"
                    priority
                /> */}
                {/* Foreground Content */}
                <div className="relative z-10 p-8 ">
                    <div className="mb-8 p-4 bg-primary/5 rounded-lg w-fit">
                        {icons[service.icon as keyof typeof icons]}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-muted-foreground mb-12">{service.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">Case Study</h3>
                                <h4 className="font-medium mb-2">{service.caseStudy.title}</h4>
                                <p className="text-muted-foreground">{service.caseStudy.description}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-muted-foreground mb-6">
                            Let&apos;s discuss how we can help transform your business with our {service.title.toLowerCase()}.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 