'use client';

import { useEffect, useRef, useState } from 'react';
import { ClipboardList, PencilRuler, Code, Bug, UploadCloud, Wrench, User, Mail, Globe, Monitor, Laptop, Server, ArrowRight, Headset, CodeSquare } from 'lucide-react';

const phases = [
    { title: 'Requirement', icon: <User className="w-8 h-8" /> },
    { title: 'Design', icon: <Monitor className="w-8 h-8" /> },
    { title: 'Development', icon: <Laptop className="w-8 h-8" /> },
    { title: 'Testing', icon: <Server className="w-8 h-8" /> },
    { title: 'Deployment', icon: <Headset className="w-8 h-8" /> },
    { title: 'Maintenance', icon: <Headset className="w-8 h-8" /> },
];

export default function SDLCSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Effect to set up the IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the section becomes visible, set isVisible to true and disconnect the observer
                if (entry.isIntersecting) {
                    console.log('Section is intersecting:', entry.isIntersecting);
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Clean up the observer when the component unmounts
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Effect to apply animations when isVisible becomes true
    useEffect(() => {
        console.log('isVisible state changed:', isVisible);
        if (isVisible) {
            const nodes = ref.current?.querySelectorAll('.sdlc-step');
            if (!nodes) return;

            nodes.forEach((node, i) => {
                // Add a class to trigger the CSS transition after a delay
                // A small delay (e.g., 10ms) is added before adding the class
                // to ensure the base styles are applied first.
                setTimeout(() => {
                    console.log(`Adding is-visible class to node ${i}`);
                    node.classList.add('is-visible');
                }, i * 150 + 10); // Stagger the animation start and add a small initial delay
            });
        }
    }, [isVisible]); // This effect runs whenever isVisible changes

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 z-10 relative">
                Our Software Development Life Cycle
            </h2>
            {/* Background dashed line */}
            {/* This is a simplified horizontal dashed line. A complex wavy line like the image would require SVG or more advanced positioning. */}
            <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-400 z-0" style={{ transform: 'translateY(-50%)' }} />

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
                {phases.map((phase, i) => (
                    <div
                        key={phase.title}
                        className={`sdlc-step flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl relative`}
                        style={{ minWidth: 150, width: 150, height: 160, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', backgroundColor: '#e0f2f7', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <div className="relative z-10 flex flex-col items-center">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-gray-700 text-lg font-bold shadow-lg bg-white`}>
                                {phase.icon}
                            </div>
                            <span className="mt-4 text-center font-medium text-gray-800">{phase.title}</span>
                        </div>
                        {/* Remove old connecting lines */}
                    
                    </div >
                ))}
            </div >

            {/* Add a style block for the animation classes */}
            <style jsx>{`
                .sdlc-step {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .sdlc-step.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </section >
    );
}
