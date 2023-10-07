"use client";

import { ReactNode } from "react";

type TechExperienceCardProps = {
    tech: {
        tech: string;
        icon: ReactNode;
        startDate: string;
    };
};

export const TechExperienceCard = ({ tech }: TechExperienceCardProps) => {
    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.tech}</p>
                {tech.icon}
            </div>

            <span>{tech.startDate} de experiência</span>
        </div>
    );
};
