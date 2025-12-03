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

export default function Projects() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-border rounded-xl p-6 hover:shadow-lg transition-shadow bg-card"
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
                    </div>
                ))}
            </div>
        </main>
    );
}
