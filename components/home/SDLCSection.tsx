'use client';

import { useEffect, useRef } from 'react';
import { ClipboardList, PencilRuler, Code, Bug, UploadCloud, Wrench } from 'lucide-react';

const phases = [
    { title: 'Requirement', color: 'bg-blue-500', icon: <ClipboardList className="w-8 h-8" /> },
    { title: 'Design', color: 'bg-teal-500', icon: <PencilRuler className="w-8 h-8" /> },
    { title: 'Development', color: 'bg-green-500', icon: <Code className="w-8 h-8" /> },
    { title: 'Testing', color: 'bg-yellow-500', icon: <Bug className="w-8 h-8" /> },
    { title: 'Deployment', color: 'bg-purple-500', icon: <UploadCloud className="w-8 h-8" /> },
    { title: 'Maintenance', color: 'bg-pink-500', icon: <Wrench className="w-8 h-8" /> },
];

export default function SDLCSection() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nodes = ref.current?.querySelectorAll('.sdlc-step');
        if (!nodes) return;
        nodes.forEach((node, i) => {
            (node as HTMLElement).style.opacity = '0';
            (node as HTMLElement).style.transform = 'translateY(40px)';
            setTimeout(() => {
                (node as HTMLElement).style.transition = 'opacity 0.6s, transform 0.6s';
                (node as HTMLElement).style.opacity = '1';
                (node as HTMLElement).style.transform = 'translateY(0)';
            }, 300 + i * 300);
        });
    }, []);

    return (
        <section className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Software Development Life Cycle
            </h2>
            <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-8">
                {phases.map((phase, i) => (
                    <div
                        key={phase.title}
                        className={`sdlc-step flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl`}
                        style={{ minWidth: 120 }}
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg ${phase.color}`}>
                            {phase.icon}
                        </div>
                        <span className="mt-4 text-center font-medium">{phase.title}</span>
                        {i < phases.length && (
                            <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 my-2" />
                        )}
                        {i < phases.length && (
                            <div className="block md:hidden h-8 w-1 bg-gradient-to-b from-gray-300 to-gray-400 my-2" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
