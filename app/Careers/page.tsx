import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe, Clock, Briefcase, GraduationCap, Heart, Zap } from "lucide-react";

const benefits = [
    {
        icon: <Briefcase className="h-10 w-10" />,
        title: "Career Growth",
        description: "Clear career progression paths and opportunities for advancement.",
    },
    {
        icon: <GraduationCap className="h-10 w-10" />,
        title: "Learning & Development",
        description: "Regular training sessions and access to learning resources.",
    },
    {
        icon: <Heart className="h-10 w-10" />,
        title: "Health & Wellness",
        description: "Comprehensive health insurance and wellness programs.",
    },
    {
        icon: <Zap className="h-10 w-10" />,
        title: "Work-Life Balance",
        description: "Flexible working hours and remote work options.",
    },
];

const openPositions = [
    {
        title: "Senior Software Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "ERP Implementation Specialist",
        department: "Consulting",
        location: "Hybrid",
        type: "Full-time",
    },
    {
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Project Manager",
        department: "Project Management",
        location: "Hybrid",
        type: "Full-time",
    },
];

export default function CareersPage() {
    return (
        <>
            <section className="py-16 md:py-24 bg-muted/30 p-4 flex justify-center">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our Growing Team
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Be part of a team that&apos;s shaping the future of technology solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Why Work With Us?
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Award className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Innovation-Driven Culture</h3>
                                        <p className="text-muted-foreground">
                                            Work on cutting-edge technologies and innovative solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Collaborative Environment</h3>
                                        <p className="text-muted-foreground">
                                            Join a team of passionate professionals who support each other.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Globe className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Global Impact</h3>
                                        <p className="text-muted-foreground">
                                            Make a difference by helping businesses worldwide transform their operations.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Work-Life Balance</h3>
                                        <p className="text-muted-foreground">
                                            Enjoy flexible working hours and a healthy work-life balance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl opacity-10" />
                            <div className="relative p-8 bg-card rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Excellence</h4>
                                            <p className="text-muted-foreground">
                                                We strive for excellence in everything we do
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Innovation</h4>
                                            <p className="text-muted-foreground">
                                                We embrace new ideas and technologies
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Collaboration</h4>
                                            <p className="text-muted-foreground">
                                                We believe in the power of teamwork
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 flex justify-center">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Benefits & Perks
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We take care of our team members with comprehensive benefits and perks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="pt-8 pb-6 px-6">
                                    <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                                        <div className="text-primary">{benefit.icon}</div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/50 flex justify-center">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our current job openings and find your perfect role.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center min-h-[200px]">
                        <h2 className="text-2xl font-semibold mb-4">Currently Not Opened Any Position</h2>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-muted-foreground mb-4">
                            Don&apos;t see a position that matches your skills?
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Send Us Your Resume
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
} 