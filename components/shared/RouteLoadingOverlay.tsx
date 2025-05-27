'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoadingOverlay() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Show the overlay for a minimum time (e.g., 1s)
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/90 transition-all">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
                Samarth <span className="dark:text-white text-black">Technoverse</span>
            </span>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
