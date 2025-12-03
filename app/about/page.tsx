export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">About Me</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Hello! I'm Chaeeun Yeom, a developer based in [Location]. I enjoy building things for the web.
                        My interest in web development started back in [Year] when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "HTML5 & CSS3", "Git", "SQL"].map((skill) => (
                            <div key={skill} className="p-3 bg-gray-50 rounded-lg text-center text-sm font-medium text-gray-700">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Experience</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-medium">Company Name</h3>
                            <p className="text-sm text-gray-500 mb-2">Position • 2023 - Present</p>
                            <p className="text-gray-600 text-sm">
                                Brief description of your role and responsibilities. What did you achieve here?
                            </p>
                        </div>
                        {/* Add more experience items as needed */}
                    </div>
                </section>
            </div>
        </main>
    );
}
