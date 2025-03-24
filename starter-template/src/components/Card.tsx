import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ 
    className, 
    children 
}: PropsWithChildren<{className?: string}>) => {
    return (
        <div
            className={twMerge(
                `group bg-gray-200/20 rounded-xl overflow-hidden 
                shadow-sm hover:shadow-xl transition-all duration-700 
                ease-in-out transform border-2 border-gray-200/5 
                hover:border-amber-500/20`,
                className
            )}
        >
            {children}
        </div>
    )
}

