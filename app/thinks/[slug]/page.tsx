import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getAllPostSlugs, getPostData } from '../../../lib/posts';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <main className="min-h-screen max-w-3xl mx-auto px-6 py-12">
            <nav className="flex gap-6 mb-12 text-sm font-medium text-gray-500">
                <Link href="/" className="hover:text-black transition-colors">
                    ← Home
                </Link>
                <Link href="/thinks" className="hover:text-black transition-colors">
                    ← Back to Thinks
                </Link>
            </nav>

            <article className="prose prose-lg prose-slate max-w-none">
                <header className="mb-10 not-prose">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {postData.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-3 text-gray-900">
                        {postData.title}
                    </h1>
                    <time className="text-gray-500">
                        {postData.date}
                    </time>
                </header>

                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {postData.content}
                </ReactMarkdown>
            </article>
        </main>
    );
}
