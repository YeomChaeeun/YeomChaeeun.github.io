"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Github, Mail, Linkedin } from "lucide-react";
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

export default function Contact() {
    return (
        <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-2xl w-full space-y-8"
            >
                <motion.div variants={fadeInUp} className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Let's Work Together</h1>
                    <p className="text-xl text-muted-foreground">
                        새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든 연락주세요.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    className="grid gap-4 md:grid-cols-2"
                >
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="mailto:yeom.chaeeun@gmail.com"
                            target="_blank"
                        >
                            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-sm text-muted-foreground">yeom.chaeeun@gmail.com</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Link
                            href="https://github.com/YeomChaeeun"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Github className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">GitHub</h3>
                                        <p className="text-sm text-muted-foreground">github.com/YeomChaeeun</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center pt-8">
                    <p className="text-muted-foreground mb-4">
                        또는 소셜 미디어를 통해 연락하실 수 있습니다
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="https://github.com/YeomChaeeun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full hover:bg-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
