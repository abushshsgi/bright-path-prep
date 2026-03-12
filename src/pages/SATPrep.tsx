import { BookOpen, Target, Clock, BarChart3, GraduationCap, Globe, TrendingUp, CheckCircle2, Users, Award, ArrowRight, Brain, Zap, Star, Eye, Layers } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import satPracticeImg from "@/assets/sat-practice-ui.jpg";
import scoreAnalyticsImg from "@/assets/score-analytics-ui.jpg";
import timedSectionsImg from "@/assets/timed-sections-ui.jpg";
import studentsHeroImg from "@/assets/students-hero.jpg";

const SATPrep = () => {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-glow-pulse" />
                  <span className="text-[11px] font-medium text-muted-foreground">SAT Preparation</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-5">
                  Your path to a <span className="text-gradient">perfect SAT score</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  IvyBridge provides the most comprehensive SAT preparation experience. Practice with real-format tests, track your progress with detailed analytics, and master every section with timed practice.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Start Practicing Free <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                    View Sample Tests
                  </button>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative">
                <img src={studentsHeroImg} alt="Students preparing for SAT" className="rounded-xl border border-border w-full object-cover aspect-[4/3] glow-border" />
                <div className="absolute -bottom-4 -left-4 glass rounded-lg p-3 glow-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Avg. Improvement</p>
                      <p className="text-base font-display font-bold text-foreground">+180 pts</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What is SAT */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Understanding the SAT</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What is the SAT and why does it matter?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States. It evaluates a student's readiness for college and provides a common data point for all applicants. Scoring well opens doors to top universities, merit-based scholarships, and competitive programs.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "Reading & Writing", desc: "Tests your ability to comprehend complex passages, analyze arguments, and apply grammar rules. Passages from literature, history, social sciences, and natural sciences." },
              { icon: Target, title: "Mathematics", desc: "Covers algebra, problem-solving, data analysis, advanced math, geometry, and trigonometry. Tests ability to apply concepts to real-world problems." },
              { icon: Clock, title: "Timed Format", desc: "Approximately 3 hours with strict time limits per section. Strategic pacing is just as important as content knowledge." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs SAT */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Who Needs SAT Prep</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">For every ambitious student</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Whether you're starting early, retaking the test, or preparing from abroad — proper SAT preparation is the key to unlocking your potential.</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: GraduationCap, title: "High School Students", desc: "Juniors and seniors preparing for competitive admissions and merit scholarships." },
              { icon: Globe, title: "International Students", desc: "Students from 80+ countries preparing to study at US universities." },
              { icon: TrendingUp, title: "Score Improvers", desc: "Retakers who want to significantly boost their previous scores." },
              { icon: Award, title: "Scholarship Seekers", desc: "Students targeting high scores for merit-based financial aid." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="text-center p-5 glass rounded-xl glow-border h-full">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-sm font-display font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Tests Feature */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">How IvyBridge Helps</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything you need to ace the SAT</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Expert-crafted tests, intelligent analytics, and timed practice — combined into one powerful platform.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">Practice Tests</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Full-length SAT practice tests</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Our tests mirror the actual SAT format exactly — same question count, difficulty distribution, and section structure. Created by educators who've helped students score 1500+. Detailed explanations for every single answer.
                </p>
                <ul className="space-y-2.5">
                  {["Exact SAT format with all sections", "Questions reviewed by expert educators", "New tests added monthly", "Detailed answer explanations"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={satPracticeImg} alt="SAT practice test interface" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <SectionReveal delay={0.15} className="order-2 md:order-1">
              <img src={scoreAnalyticsImg} alt="Score analytics" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">Score Analytics</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Track your progress with precision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Our analytics dashboard gives you a complete picture of your preparation. Score trends, strengths and weaknesses by topic, personalized study recommendations, and percentile comparisons — all in real-time.
                </p>
                <ul className="space-y-2.5">
                  {["Score trends and historical data", "Section-by-section breakdowns", "AI-powered study recommendations", "Percentile ranking comparisons"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">Timed Sections</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Master time management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Time pressure is the biggest SAT challenge. Practice individual sections with real constraints, analyze your pacing, and build speed. Our timer tracks time-per-question to identify where you lose time.
                </p>
                <ul className="space-y-2.5">
                  {["Real SAT time limits per section", "Pause and resume functionality", "Time-per-question analysis", "Pacing strategies and tips"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={timedSectionsImg} alt="Timed sections" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why SAT Matters */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why SAT preparation is essential</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">The SAT isn't just another test — it's a gateway to your future. Preparation builds skills that serve you throughout college and beyond.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, title: "College Admissions", desc: "Your SAT score is one of the most critical factors in admissions. Top universities receive tens of thousands of applications, and a strong score helps you stand out. It's the standardized measure that allows fair comparison across different schools and backgrounds." },
              { icon: Award, title: "Scholarship Opportunities", desc: "Many merit-based scholarships require minimum SAT scores. A higher score can unlock thousands in financial aid. Prestigious awards like the National Merit Scholarship are directly tied to test performance." },
              { icon: Brain, title: "Academic Confidence", desc: "Preparation builds critical thinking, reading comprehension, and mathematical fluency that extends beyond the test. Students who prepare thoroughly feel more confident and perform better in college." },
              { icon: TrendingUp, title: "Competitive Advantage", desc: "In a competitive landscape, every point counts. Quality preparation consistently leads to better outcomes. The strategies learned — time management, strategic reasoning — are lifelong skills." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* University Admissions */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">University Admissions</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Prepare for top universities</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  With acceptance rates at top universities dropping below 5%, every element of your application needs to shine. Your SAT score is one of the few objective measures admissions officers rely on.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  IvyBridge helps you prepare strategically — simulating the real test environment, identifying weaknesses early, and providing the focused practice you need. Our students consistently achieve 90th percentile and above.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: "1500+", label: "Avg. Top Score" },
                    { num: "92%", label: "Improvement Rate" },
                    { num: "50K+", label: "Students Helped" },
                  ].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/50">
                      <p className="text-lg font-display font-bold text-accent">{s.num}</p>
                      <p className="text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="space-y-3">
                {[
                  { school: "Ivy League Universities", rate: "Target: 1500+" },
                  { school: "Top 25 National Universities", rate: "Target: 1400+" },
                  { school: "Top 50 Universities", rate: "Target: 1300+" },
                  { school: "Scholarship Eligibility", rate: "Target: 1200+" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-lg p-4 glow-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{item.school}</span>
                      <span className="text-[11px] text-accent font-semibold">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: "🇺🇿", country: "Uzbekistan", num: "2,400+" },
                  { flag: "🇰🇷", country: "South Korea", num: "18,000+" },
                  { flag: "🇮🇳", country: "India", num: "65,000+" },
                  { flag: "🇨🇳", country: "China", num: "120,000+" },
                  { flag: "🇳🇬", country: "Nigeria", num: "8,500+" },
                  { flag: "🇧🇷", country: "Brazil", num: "12,000+" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-lg p-3 glow-border">
                    <p className="text-sm mb-0.5">{item.flag} {item.country}</p>
                    <p className="text-[11px] text-muted-foreground">{item.num} students</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">International Students</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Preparing international students for US colleges</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  For international students, the SAT represents both an academic and cultural challenge. IvyBridge bridges this gap with cultural context, American English patterns, and practice tailored to non-native speakers.
                </p>
                <ul className="space-y-2.5">
                  {["Adapted for non-native English speakers", "Cultural context for reading passages", "Study schedules for all time zones", "Community of 80+ nationalities"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* SAT Strategies */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Strategies</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Proven SAT strategies that work</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Our platform teaches you not just content, but the test-taking strategies that top scorers use.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Eye, title: "Process of Elimination", desc: "Learn to systematically eliminate wrong answers, even when you're unsure. This strategy alone can boost your score by 50-100 points." },
              { icon: Layers, title: "Strategic Question Order", desc: "Not all questions are equal. Learn which to tackle first and which to skip, maximizing points within time limits." },
              { icon: Brain, title: "Pattern Recognition", desc: "The SAT uses predictable patterns. Learn to recognize common question structures and trap answers." },
              { icon: Zap, title: "Speed Reading Techniques", desc: "Master active reading strategies that help you comprehend passages quickly without sacrificing accuracy." },
              { icon: Star, title: "Math Shortcuts", desc: "Learn time-saving math techniques — back-solving, plugging in numbers, and estimating — that make hard problems easy." },
              { icon: BarChart3, title: "Score Maximization", desc: "Understand the scoring algorithm and learn to prioritize questions that give you the most points per minute invested." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by students worldwide</h2>
              <p className="text-sm text-muted-foreground">Our numbers speak for themselves.</p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "50,000+", label: "Active Students" },
              { num: "2M+", label: "Tests Completed" },
              { num: "+180", label: "Avg. Score Gain" },
              { num: "95%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 text-center glow-border">
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{s.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center glow-border relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to start your SAT journey?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                  Join thousands of students who have improved their SAT scores with IvyBridge. Start with a free practice test today.
                </p>
                <button className="px-8 py-3.5 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Start Free Practice Test <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default SATPrep;
