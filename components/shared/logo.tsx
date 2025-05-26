"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex items-center", className)}>
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Samarth
            </span>
            <span className="font-medium text-xl ml-1">Technoverse</span>
        </div>
    );
}