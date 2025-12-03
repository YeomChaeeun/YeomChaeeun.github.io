"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-4xl w-full space-y-6"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          안녕하세요,
          <br />
          <span className="text-primary">염채은</span>입니다.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          사용자 중심의 UI/UX를 만드는 프론트엔드 개발자입니다.
          <br />
          복잡한 문제를 간결하고 명료하게 풀어내는 것을 좋아합니다.
          <br />
          <span className="mt-4 block">
            배우고 생각한 것들을 글로 기록합니다.{" "}
            <Link href="/thinks" className="text-primary hover:underline font-medium">
              Read my thinks →
            </Link>
          </span>
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TailwindCSS</Badge>
          <Badge variant="secondary">React Query</Badge>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            About Me
          </Link>
          <Link
            href="https://github.com/YeomChaeeun"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}