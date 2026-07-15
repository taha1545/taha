import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn("group relative inline-flex items-center", className)}
        >
            <span className="text-2xl font-semibold leading-none tracking-tight text-white transition-colors duration-200 group-hover:text-[#d4a574] sm:text-[1.85rem]">
                Sensi
                <span className="text-[#d4a574] transition-colors duration-200 group-hover:text-white">
                    pav
                </span>
            </span>
        </Link>
    );
}
