"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Award, Briefcase } from "lucide-react";
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

export default function About() {
    return (
        <main className="min-h-screen">
            {/* About Me */}
            <Section className="pt-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            2020년부터 지음지식서비스에서 프론트엔드 개발자로 일하고 있습니다.
                            사용자 경험을 최우선으로 생각하며, 성능과 접근성을 모두 고려한 웹 애플리케이션을 만들기 위해 노력합니다.
                        </p>
                        <p>
                            React 생태계에 깊은 관심을 가지고 있으며, 최신 기술 트렌드를 학습하고 실무에 적용하는 것을 즐깁니다.
                            특히 사용자 인터랙션과 UI/UX 개선을 통해 비즈니스 가치를 높이는 일에 보람을 느낍니다.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Experience */}
            <Section id="experience">
                <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

                <div className="space-y-8">
                    {/* 지음지식서비스 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">지음지식서비스</h3>
                                    <p className="text-muted-foreground">프론트엔드 개발자</p>
                                    <p className="text-sm text-muted-foreground">2020.09 ~ 현재</p>
                                </div>
                            </div>

                            <div className="space-y-6 mt-6">
                                {/* 네이버 파이낸셜 프로젝트 */}
                                <div>
                                    <h4 className="font-semibold text-lg mb-3">네이버 파이낸셜 프로젝트</h4>
                                    <p className="text-sm text-muted-foreground mb-3">2023.02 ~ 현재</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>React v16→v18 업그레이드 및 전체 컴포넌트 리팩토링</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>외부 도메인 가입 경로 이슈 개선 → <strong className="text-foreground">전환율 15% 증가</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>정책지원금 조회 UI/UX 개선 → <strong className="text-foreground">인터랙션 1.5배 증가</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>정책지원금 해시태그 기능 고도화</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>API 중복 호출 개선으로 성능 최적화</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>사업자 정보 대시보드 신규 도메인 개발 및 통합</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>어드민 시스템 통합 → <strong className="text-foreground">유지보수 시간 30% 절감</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>메타태그 개선 및 사내 분석로그 적용</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>외부 시스템 연동 (국세청 스크래핑 SDK)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>금융 서비스 연동 개발 (진행 중)</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* 푸르덴셜생명 X KB금융그룹 */}
                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-semibold text-lg mb-3">푸르덴셜생명 X KB금융그룹 차세대 통합 프로젝트</h4>
                                    <p className="text-sm text-muted-foreground mb-3">2022.07 ~ 2023.01</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>SFA 통합 고객 시스템 개발</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* 신한생명 X 오렌지라이프 */}
                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-semibold text-lg mb-3">신한생명 X 오렌지라이프 차세대 통합 프로젝트</h4>
                                    <p className="text-sm text-muted-foreground mb-3">2020.11 ~ 2022.05</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>IT 통합 시스템 구축</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </Section>

            {/* Skills */}
            <Section id="skills" className="bg-muted/50">
                <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid gap-6 md:grid-cols-2"
                >
                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>React</Badge>
                                <Badge>TypeScript</Badge>
                                <Badge>JavaScript</Badge>
                                <Badge>HTML5</Badge>
                                <Badge>CSS3</Badge>
                                <Badge>Next.js</Badge>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">UI Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Material UI</Badge>
                                <Badge>TailwindCSS</Badge>
                                <Badge>Styled-Components</Badge>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">State Management</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>React-Query</Badge>
                                <Badge>Recoil</Badge>
                                <Badge>Jotai</Badge>
                                <Badge>Context API</Badge>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">Backend & Database</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Java</Badge>
                                <Badge>SpringBoot</Badge>
                                <Badge>Node.js</Badge>
                                <Badge>MySQL</Badge>
                                <Badge>MongoDB</Badge>
                                <Badge>Oracle</Badge>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Git</Badge>
                                <Badge>VSCode</Badge>
                                <Badge>IntelliJ</Badge>
                                <Badge>Zenhub</Badge>
                                <Badge>Jira</Badge>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <h3 className="font-semibold text-lg mb-4">Others</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Firebase</Badge>
                                <Badge>Flutter</Badge>
                                <Badge>Nexacro</Badge>
                                <Badge>Thymeleaf</Badge>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </Section>

            {/* Books & Certifications */}
            <Section id="achievements">
                <h2 className="text-3xl font-bold mb-8">Books & Certifications</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">출간 도서</h3>
                                    <p className="text-muted-foreground">
                                        『개발이 재미있는 플러터 앱 프로그래밍』
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">공동저자, 2023</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">자격증 & 교육</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• 정보처리기사</li>
                                        <li>• SQLD</li>
                                        <li>• 웹디자인 기능사</li>
                                        <li>• 가천대학교 컴퓨터공학과 학사 (2014-2019)</li>
                                        <li>• 응용통계학과 부전공 (2014-2019)</li>
                                        <li>• 웹퍼블리셔 전문가 양성과정 수료 (2020)</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
