import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] max-w-4xl mx-auto px-6 flex flex-col justify-center">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Hello, I'm Chaeeun Yeom.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          A passionate developer focused on building accessible and performant web applications.
          I love turning complex problems into simple, beautiful solutions.
          <br />
          <span className="mt-4 block">
            I also write about my learning journey and thoughts.{" "}
            <Link href="/thinks" className="text-blue-600 hover:underline font-medium">
              Read my thinks →
            </Link>
          </span>
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}