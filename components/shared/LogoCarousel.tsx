'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const LogoCarousel = () => {
    const logos = [
        '/Samarth LOGOS/JVv JPGE Logo.jpg',
        '/Samarth LOGOS/Samarth Agriculture - With Agriculture - v2.jpg',
        '/Samarth LOGOS/Samarth Diamond_SINCE 1987 PNG.png',
        '/Samarth LOGOS/Navdeep School PNG.png',
        '/Samarth LOGOS/SJ- New Logo.png',
    ];

    const [position, setPosition] = useState(0);
    const logoWidth = 80; // Width of each logo
    const gap = 32; // Gap between logos
    const totalWidth = (logoWidth + gap) * logos.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {
                const newPosition = prev - 1;
                // When we've scrolled one full set, reset to start of second set
                if (Math.abs(newPosition) >= totalWidth) {
                    return 0;
                }
                return newPosition;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [totalWidth]);

    return (
        <div className="w-full overflow-hidden flex flex-col items-center">
            <h1 className='text-2xl py-4'>Our Clients</h1>
            <div className="relative flex max-w-7xl mx-auto overflow-hidden mb-4">
                <div
                    className="flex gap-8"
                    style={{
                        transform: `translateX(${position}px)`,
                        transition: 'transform 0.03s linear',
                    }}
                >
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-[140px] h-[90px] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                        >
                            <Image
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                fill
                                className="object-contain p-2 rounded-xl"
                                sizes="(max-width: 180px) 100vw, 180px"
                            />
                        </div>
                    ))}
                    {/* Second set for seamless loop */}
                    {logos.map((logo, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 w-[140px] h-[90px] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white mb-4"
                        >
                            <Image
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 180px) 100vw, 180px"
                            />
                        </div>
                    ))}
                    {/* Third set for extra smoothness */}
                    {logos.map((logo, index) => (
                        <div
                            key={`third-${index}`}
                            className="flex-shrink-0 w-[140px] h-[90px] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                        >
                            <Image
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 180px) 100vw, 180px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel; 