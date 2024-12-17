import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitsProps {
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        title: "Strengthen Your Brand",
        description:
            "Create a brand that resonates with your audience by fostering credibility and trust.",
    },
    {
        title: "Generate Quality Leads",
        description:
            "Attract the right audience to your business with strategies tailored for growth.",
    },
    {
        title: "Maximize Revenue",
        description:
            "Increase your profit margins by turning potential customers into repeat buyers.",
    },
    {
        title: "Innovate with Confidence",
        description:
            "Test new ideas and gain insights to evolve your business and stay ahead of the competition.",
    },
];


export const BenefitsSection = () => {
    return (
        <section id="benefits" className='container px-10 py-24 sm:py-32'>
            <div className='grid lg:grid-cols-2 place-items-center lg:gap-24'>
                <div>
                    <h2 className='text-lg text-primary mb-2 tracking-wider'>Benefits</h2>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Your Shortcut to Success</h2>
                    <p className='text-xl text-muted-foreground mb-8'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                        ducimus reprehenderit architecto rerum similique facere odit
                        deleniti necessitatibus quo quae.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    {benefitList.map(({title, description }, index) => (
                        <Card
                            key={title}
                            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                        >
                            <CardHeader>
                                <div className="flex justify-between">
                                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                        0{index + 1}
                                    </span>
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground">
                                {description}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}

