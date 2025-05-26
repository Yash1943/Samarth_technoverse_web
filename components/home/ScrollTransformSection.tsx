'use client';

import { useRef, useEffect, useState } from 'react';

export default function ScrollTransformSection({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({ opacity: 1, transform: 'translateY(0px)' });

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far the element is from the top of the viewport
            const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
            // Fade out and move up as you scroll down
            setStyle({
                opacity: scrollProgress,
                transform: `translateY(${40 - 40 * scrollProgress}px)`,
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={ref} style={{ transition: 'opacity 0.4s, transform 0.4s', ...style }}>
            {children}
        </div>
    );
}
