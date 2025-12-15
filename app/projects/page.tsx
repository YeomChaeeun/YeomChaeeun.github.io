"use client";

import { motion, type Variants } from "framer-motion";

const projects = [
    {
        title: "Project One",
        description: "A brief description of the first project. What tech stack was used and what problem did it solve?",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "#",
    },
    {
        title: "Project Two",
        description: "A brief description of the second project. Highlighting key features and challenges overcome.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
    },
    {
        title: "Project Three",
        description: "A brief description of the third project. Maybe a mobile app or a utility tool.",
        tags: ["Flutter", "Dart", "Firebase"],
        link: "#",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Projects() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <motion.h1
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        transition={{ duration: 0.2 }}
                        className="border border-border rounded-xl p-6 bg-card cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            className="text-sm font-medium text-primary hover:underline underline-offset-4"
                        >
                            View Project &rarr;
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
