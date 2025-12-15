"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Naver Financial",
        period: "2023",
        description: "Developed frontend components for the user dashboard, focusing on accessibility and performance optimization.",
        tags: ["React", "TypeScript", "Next.js"],
        link: "#",
    },
    {
        title: "Prudential x KB",
        period: "2022",
        description: "Integrated mobile web features for a unified insurance platform, ensuring seamless transitions and responsive design.",
        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "#",
    },
    {
        title: "Shinhan x Orange",
        period: "2021",
        description: "Built an interactive data visualization dashboard for internal analytics, improving decision-making processes.",
        tags: ["React", "D3.js", "Redux"],
        link: "#",
    },
    {
        title: "YeomChaeeun.github.io",
        period: "2024",
        description: "Personal portfolio website built with Next.js 14, featuring a minimalist design and markdown-based blog.",
        tags: ["Next.js 14", "TailwindCSS", "Framer Motion"],
        link: "#",
    }
];

export default function Projects() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <div className="space-y-4 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Projects</h1>
                <p className="text-lg text-muted-foreground">Selected works and experiments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {projects.map((project, index) => (
                    <article key={index} className="group space-y-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold group-hover:underline underline-offset-4 decoration-2">
                                <Link href={project.link} className="flex items-center gap-1">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </h3>
                            <span className="text-sm font-mono text-muted-foreground tabular-nums">{project.period}</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
