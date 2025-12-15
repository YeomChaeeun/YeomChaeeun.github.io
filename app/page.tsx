"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Chae Yeom
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Frontend Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Building accessible and accessible web experiences at <span className="text-foreground font-semibold">Jium Knowledge Service</span> since 2020.
          Passionate about clean code, UI design systems, and developer experience.
        </p>
      </section>

      {/* Career Highlights */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight">Career Highlights</h2>

        <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Key Projects</h3>
            <ul className="space-y-3 text-muted-foreground text-lg list-disc list-inside marker:text-foreground">
              <li>Naver Financial - Frontend Development</li>
              <li>Prudential x KB - Mobile Web Integration</li>
              <li>Shinhan x Orange - Interactive Dashboard</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Publications</h3>
            <p className="text-lg text-muted-foreground">
              Co-author, <span className="italic text-foreground">Flutter In Action</span> (2023)
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <p className="text-lg text-muted-foreground">
              React, Next.js, TypeScript, TailwindCSS, Flutter
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8 pb-10">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <div className="flex gap-6">
          <Link
            href="https://github.com/YeomChaeeun"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={28} strokeWidth={1.5} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yeomchaeeun"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={28} strokeWidth={1.5} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:chae.yeom@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={28} strokeWidth={1.5} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>
    </main>
  );
}