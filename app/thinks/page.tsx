import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function ThinksPage() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen max-w-6xl mx-auto px-6 py-12">
            <div className="mb-12">
                <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors mb-4 inline-block"
                >
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold tracking-tight">Thinks</h1>
                <p className="text-xl text-muted-foreground mt-2">
                    Thoughts, learnings, and experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPostsData.map(({ slug, date, title, tags, excerpt }) => (
                    <Link
                        key={slug}
                        href={`/thinks/${slug}`}
                        className="group block p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-sm transition-all"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {title}
                                </h2>
                                <time className="text-sm text-muted-foreground block mb-3">
                                    {date}
                                </time>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                    {excerpt}
                                </p>
                            </div>
                            <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                Read more →
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
