"use client"

import React from 'react'
import { icons } from "lucide-react";

interface sponsorsProps {
    icon: string;
    name: string;
}

const sponsors: sponsorsProps[] = [
    {
        icon: "Crown",
        name: "Acmebrand",
    },
    {
        icon: "Vegan",
        name: "Acmelogo",
    },
    {
        icon: "Ghost",
        name: "Acmesponsor",
    },
    {
        icon: "Puzzle",
        name: "Acmeipsum",
    },
    {
        icon: "Squirrel",
        name: "Acme",
    },
    {
        icon: "Cookie",
        name: "Accmee",
    },
    {
        icon: "Drama",
        name: "Acmetech",
    },
];

export const Sponsors = () => {
    return (
        <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
            <h2 className="text-lg md:text-xl text-center mb-6">
                Our Sponsors
            </h2>
            <div className="overflow-hidden relative">
                <div className="sponsor-scroll flex animate-marquee space-x-[3rem]">
                    {sponsors.map(({ icon, name }) => {
                        const SponsorIcon = icons[icon as keyof typeof icons];
                        return (
                            <div
                                key={name}
                                className="flex items-center text-xl md:text-2xl font-medium"
                            >
                                <SponsorIcon className="mr-2" />
                                {name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};