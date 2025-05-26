'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RouteLoadingOverlay() {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleStart = () => {
            setLoading(true);
            // Optional: Always show for at least 2 seconds
            timeout = setTimeout(() => setLoading(false), 10000);
        };
        const handleComplete = () => {
            clearTimeout(timeout);
            setLoading(false);
        };

        router.events?.on('routeChangeStart', handleStart);
        router.events?.on('routeChangeComplete', handleComplete);
        router.events?.on('routeChangeError', handleComplete);

        return () => {
            router.events?.off('routeChangeStart', handleStart);
            router.events?.off('routeChangeComplete', handleComplete);
            router.events?.off('routeChangeError', handleComplete);
            clearTimeout(timeout);
        };
    }, [router.events, pathname]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/90 transition-all">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
                Samarth <span className="text-white">Technoverse</span>
            </span>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
