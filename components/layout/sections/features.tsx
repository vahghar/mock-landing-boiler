import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturesProps {
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        title: "Optimized for Mobile",
        description:
            "Our platform delivers an exceptional experience on any device, from smartphones to tablets.",
    },
    {
        title: "Built on Trust",
        description:
            "Join a growing network of satisfied users who rely on our proven and trusted services.",
    },
    {
        title: "Tailored Strategies",
        description:
            "We craft solutions designed specifically to meet your audience's needs and objectives.",
    },
    {
        title: "Captivating Imagery",
        description:
            "Enhance user engagement with visuals that are both impactful and aesthetically pleasing.",
    },
    {
        title: "Effective CTAs",
        description:
            "Drive user action with clear, compelling calls-to-action placed strategically across your content.",
    },
    {
        title: "Attention-Grabbing Headlines",
        description:
            "Communicate key messages instantly with concise, powerful, and engaging headlines.",
    },
];

export const FeaturesSection = () => {
    return (
        <section id="features" className='container py-24 sm:py-32'>
            <h2 className='text-lg text-primary text-center mb-2 tracking wider'>
                Features
            </h2>

            <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>What Makes Us Stand Out</h2>

            <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
                Discover how our unique features provide an unmatched experience,
                crafted to meet your goals with precision and care.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureList.map(({title, description }) => (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center">
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground text-center">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
