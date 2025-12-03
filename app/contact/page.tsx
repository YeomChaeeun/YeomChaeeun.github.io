export default function Contact() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>

            <div className="max-w-xl">
                <p className="text-gray-600 mb-8 leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="space-y-4">
                    <a
                        href="mailto:yce0222@gmail.com"
                        className="block p-4 border border-gray-200 rounded-lg hover:border-black transition-colors group"
                    >
                        <h3 className="font-medium mb-1 group-hover:text-blue-600 transition-colors">Email</h3>
                        <p className="text-gray-500 text-sm">yce0222@gmail.com</p>
                    </a>

                    <a
                        href="https://github.com/YeomChaeeun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-gray-200 rounded-lg hover:border-black transition-colors group"
                    >
                        <h3 className="font-medium mb-1 group-hover:text-blue-600 transition-colors">GitHub</h3>
                        <p className="text-gray-500 text-sm">github.com/YeomChaeeun</p>
                    </a>
                </div>
            </div>
        </main>
    );
}
