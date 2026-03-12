import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, BarChart3, Clock, Star, Shield, Globe, GraduationCap, Target, CheckCircle2, TrendingUp, Zap, FileText, Award, MessageSquare, Layers, PenTool, Brain, Headphones, Eye } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import satPracticeImg from "@/assets/sat-practice-ui.jpg";
import scoreAnalyticsImg from "@/assets/score-analytics-ui.jpg";
import timedSectionsImg from "@/assets/timed-sections-ui.jpg";
import studentsHeroImg from "@/assets/students-hero.jpg";
import creatorHeroImg from "@/assets/creator-hero.jpg";
import creatorUploadImg from "@/assets/creator-upload-ui.jpg";
import reviewsRatingsImg from "@/assets/reviews-ratings-ui.jpg";

const Index = () => {
  return (
    <div className="pt-14">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-44">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-glow-pulse" />
                <span className="text-[11px] font-medium text-muted-foreground">SAT & IELTS Preparation Platform</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
                The smarter way to{" "}
                <span className="text-gradient">prepare & succeed</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
                Practice with expert-crafted SAT and IELTS tests, track your progress with advanced analytics, and join a global community of students and educators.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/sat" className="px-7 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Start Practicing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/creators" className="px-7 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                  For Educators
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ SOCIAL PROOF BAR ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "50,000+", label: "Active Students" },
              { num: "15,000+", label: "Tests Available" },
              { num: "+180", label: "Avg. Score Gain" },
              { num: "95%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{s.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLATFORM OVERVIEW ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Platform</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything you need in one place</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">IvyBridge brings SAT preparation, IELTS mock tests, score analytics, and a creator marketplace into a single, beautifully designed platform.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "Practice Tests", desc: "Full-length SAT and IELTS tests that mirror real exam formats. Created by verified educators." },
              { icon: BarChart3, title: "Score Analytics", desc: "Track progress with detailed breakdowns, percentile comparisons, and personalized study plans." },
              { icon: Clock, title: "Timed Sections", desc: "Master time management with section-by-section practice under real test conditions." },
              { icon: Users, title: "Creator Marketplace", desc: "Access tests from 3,200+ verified educators and tutors worldwide." },
              { icon: Star, title: "Reviews & Ratings", desc: "Transparent quality ratings help you find the best content from the best creators." },
              { icon: Shield, title: "Trusted & Secure", desc: "Bank-level security, verified content, and a 95% satisfaction rate across the platform." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full hover-scale glow-border">
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

      {/* ============ SAT SECTION ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">SAT Preparation</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Master the SAT with confidence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">The SAT is a standardized test used by most US colleges for admissions. A strong SAT score can open doors to top universities, scholarships, and competitive programs worldwide.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <SectionReveal>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Full-length practice tests</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Our tests mirror the exact SAT format — same question count, same difficulty distribution, same timing. Created by experienced educators who understand what it takes to score 1500+. New tests are added every month so you never run out of fresh practice material.
                </p>
                <ul className="space-y-2.5">
                  {["Exact SAT format with all sections", "Expert-reviewed questions", "Detailed answer explanations", "New tests added monthly"].map((t, i) => (
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
              <img src={scoreAnalyticsImg} alt="Score analytics dashboard" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Advanced score analytics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  See your score trends over time, identify strengths and weaknesses by topic, and get AI-powered recommendations on what to study next. Our analytics go beyond simple scores — they give you a roadmap to improvement.
                </p>
                <ul className="space-y-2.5">
                  {["Score trends and historical data", "Section-by-section breakdowns", "Weakness identification", "Percentile ranking comparisons"].map((t, i) => (
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
                <h3 className="text-2xl font-display font-bold mb-4">Timed section practice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Time pressure is one of the biggest SAT challenges. Practice individual sections with real time constraints, analyze your pacing, and build the speed you need. Our timer tracks time-per-question so you can identify where you spend too long.
                </p>
                <ul className="space-y-2.5">
                  {["Real SAT time limits", "Pause and resume", "Time-per-question analysis", "Pacing strategy tips"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={timedSectionsImg} alt="Timed sections interface" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ SAT IMPORTANCE ============ */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why SAT preparation is essential</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Your SAT score is more than a number — it's a gateway to your academic future. The right preparation can mean the difference between acceptance and rejection at your dream university.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, title: "College Admissions", desc: "Your SAT score is one of the most critical factors in college admissions. Top universities receive tens of thousands of applications annually, and a strong SAT score helps you stand out. It's the only standardized measure that allows admissions officers to compare students from different schools and backgrounds objectively." },
              { icon: Award, title: "Scholarship Opportunities", desc: "Many merit-based scholarships have minimum SAT score requirements. A higher score can unlock thousands of dollars in financial aid. Some prestigious scholarships — like the National Merit Scholarship — are directly tied to standardized test performance." },
              { icon: Brain, title: "Academic Confidence", desc: "Structured preparation builds critical thinking, reading comprehension, and mathematical fluency that extends far beyond the test. Students who prepare thoroughly report feeling more confident entering college and performing better in their first-year coursework." },
              { icon: TrendingUp, title: "Competitive Advantage", desc: "In an increasingly competitive landscape, every point matters. Students who invest in quality preparation consistently outperform those who don't. The strategies you learn — time management, strategic reasoning, process of elimination — are invaluable skills for life." },
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

      {/* ============ WHO NEEDS SAT ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Who Needs This</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">SAT prep is for every ambitious student</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Whether you're a high school student, an international applicant, or someone looking to improve a previous score — IvyBridge is designed for you.</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: GraduationCap, title: "High School Students", desc: "Juniors and seniors preparing for college admissions and merit scholarships." },
              { icon: Globe, title: "International Students", desc: "Students from 80+ countries preparing to study at US colleges and universities." },
              { icon: TrendingUp, title: "Score Improvers", desc: "Retakers who want to significantly boost their previous SAT scores." },
              { icon: Award, title: "Scholarship Seekers", desc: "Students aiming for high scores to qualify for merit-based financial aid." },
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

      {/* ============ IELTS SECTION ============ */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">IELTS Mock Tests</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Complete IELTS preparation</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The International English Language Testing System (IELTS) is accepted by over 11,000 organizations in 140+ countries. Whether you're applying for university admission, immigration, or professional certification — a strong IELTS score is essential.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Headphones, title: "Listening", desc: "Practice with authentic listening passages — conversations, lectures, and monologues. Train your ear for various English accents including British, American, and Australian." },
              { icon: BookOpen, title: "Reading", desc: "Academic and General Training reading passages with diverse topics. Practice scanning, skimming, and detailed comprehension strategies for all question types." },
              { icon: PenTool, title: "Writing", desc: "Task 1 and Task 2 practice with model answers and scoring rubrics. Learn to structure essays, describe data, and present arguments effectively." },
              { icon: MessageSquare, title: "Speaking", desc: "Simulated speaking tests with topic cards and follow-up questions. Build confidence with structured practice for all three parts of the speaking exam." },
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

          {/* IELTS Details */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <SectionReveal>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Why IELTS preparation matters</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  IELTS is the world's most popular English language proficiency test. Millions of people take it every year to study abroad, migrate, or advance their careers. Without proper preparation, even strong English speakers can underperform due to unfamiliarity with the test format and time constraints.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  IvyBridge provides full-length IELTS mock tests that replicate the exact exam conditions. Our tests cover all four modules — Listening, Reading, Writing, and Speaking — with detailed scoring and feedback to help you identify areas for improvement.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "Band 7+", label: "Avg. student score" },
                    { num: "12,000+", label: "IELTS tests available" },
                    { num: "140+", label: "Countries accepted" },
                    { num: "98%", label: "Score improvement" },
                  ].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/50">
                      <p className="text-lg font-display font-bold text-foreground">{s.num}</p>
                      <p className="text-[11px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={studentsHeroImg} alt="Students preparing for IELTS" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>

          {/* IELTS Academic vs General */}
          <div className="grid md:grid-cols-2 gap-4">
            <SectionReveal>
              <div className="glass rounded-xl p-6 h-full glow-border">
                <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-accent mb-3">Academic</span>
                <h3 className="text-lg font-display font-semibold mb-3">IELTS Academic</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Designed for students applying to undergraduate or postgraduate programs at English-speaking universities. The Academic test features more complex reading passages from academic journals and requires Task 1 responses to describe visual data (charts, graphs, diagrams).
                </p>
                <ul className="space-y-2">
                  {["University admissions worldwide", "Complex academic reading passages", "Data description in Writing Task 1", "Higher band score requirements (6.5-7.5)"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="glass rounded-xl p-6 h-full glow-border">
                <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-accent mb-3">General Training</span>
                <h3 className="text-lg font-display font-semibold mb-3">IELTS General Training</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Designed for immigration, work experience, or training programs. General Training reading passages come from everyday sources like advertisements, handbooks, and newspapers. Writing Task 1 requires letter writing (formal, semi-formal, or informal).
                </p>
                <ul className="space-y-2">
                  {["Immigration to English-speaking countries", "Workplace and everyday reading texts", "Letter writing in Writing Task 1", "Typical requirement: Band 6.0-7.0"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ IELTS MOCK TEST FEATURES ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Mock Test Features</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">IELTS mock tests that feel like the real exam</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our IELTS mock tests are designed to replicate every aspect of the actual exam. From timing to question types to scoring — you'll know exactly what to expect on test day.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Clock, title: "Realistic Timing", desc: "Each module follows exact IELTS time limits. Listening: 30 min + 10 min transfer. Reading: 60 min. Writing: 60 min. Practice under real conditions to build stamina." },
              { icon: Target, title: "Band Score Prediction", desc: "Our scoring algorithm estimates your band score based on your raw marks. Get predicted scores for each module and an overall band score prediction." },
              { icon: Eye, title: "Detailed Feedback", desc: "After each test, review every answer with detailed explanations. Understand why correct answers are correct and learn from your mistakes." },
              { icon: Layers, title: "Question Type Coverage", desc: "All 40+ IELTS question types are covered — multiple choice, matching, sentence completion, diagram labeling, short answer, and more." },
              { icon: TrendingUp, title: "Progress Tracking", desc: "Track your band scores across multiple tests. See improvement trends, identify weak modules, and get study recommendations based on your data." },
              { icon: Globe, title: "Multi-Accent Audio", desc: "Listening tests feature speakers from Britain, Australia, New Zealand, Canada, and the US — just like the real IELTS." },
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

          {/* IELTS Study Plan */}
          <SectionReveal>
            <div className="glass rounded-xl p-8 md:p-12 glow-border">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Study Plan</span>
                  <h3 className="text-2xl font-display font-bold mb-4">Personalized IELTS study plans</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Based on your diagnostic test results, IvyBridge creates a customized study plan that focuses on your weakest areas. Whether you have 2 weeks or 3 months to prepare, we'll optimize your study time for maximum improvement.
                  </p>
                  <div className="space-y-3">
                    {[
                      { week: "Week 1-2", task: "Diagnostic testing & weakness identification" },
                      { week: "Week 3-6", task: "Focused module practice & strategy building" },
                      { week: "Week 7-10", task: "Full-length mock tests & score optimization" },
                      { week: "Week 11-12", task: "Final review & exam simulation" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                        <span className="text-[11px] font-semibold text-accent shrink-0 w-20">{item.week}</span>
                        <span className="text-xs text-muted-foreground">{item.task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Listening Skills", value: "85%" },
                    { label: "Reading Comprehension", value: "72%" },
                    { label: "Writing Structure", value: "68%" },
                    { label: "Speaking Fluency", value: "78%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                        <span className="text-xs font-semibold text-foreground">{item.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-gradient-accent" style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ INTERNATIONAL STUDENTS ============ */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Global Community</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">For international students preparing for US colleges</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Every year, hundreds of thousands of international students take the SAT and IELTS as part of their journey to studying abroad. For these students, the test format, question styles, and expectations may be entirely unfamiliar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  IvyBridge is built to help bridge this gap. Our platform provides cultural context for reading passages, explains American English usage patterns, and offers practice tailored to international test-takers. With students from over 80 countries, we understand the unique challenges.
                </p>
                <ul className="space-y-2.5">
                  {["Tests adapted for non-native English speakers", "Cultural context for reading passages", "Study schedules for all time zones", "Global student community"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: "🇺🇿", country: "Uzbekistan", students: "2,400+" },
                  { flag: "🇰🇷", country: "South Korea", students: "18,000+" },
                  { flag: "🇮🇳", country: "India", students: "65,000+" },
                  { flag: "🇨🇳", country: "China", students: "120,000+" },
                  { flag: "🇳🇬", country: "Nigeria", students: "8,500+" },
                  { flag: "🇧🇷", country: "Brazil", students: "12,000+" },
                  { flag: "🇹🇷", country: "Turkey", students: "9,200+" },
                  { flag: "🇰🇿", country: "Kazakhstan", students: "3,800+" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-lg p-3 glow-border">
                    <p className="text-lg mb-0.5">{item.flag} {item.country}</p>
                    <p className="text-[11px] text-muted-foreground">{item.students} students</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ UNIVERSITY ADMISSIONS ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">University Admissions</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Target scores for top universities</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Different universities have different expectations. Understanding your target score helps you plan your preparation strategy effectively.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tier: "Ivy League", sat: "1500+", ielts: "Band 8.0+", examples: "Harvard, Yale, Princeton, Columbia" },
              { tier: "Top 25", sat: "1400+", ielts: "Band 7.5+", examples: "UCLA, Michigan, NYU, Georgetown" },
              { tier: "Top 50", sat: "1300+", ielts: "Band 7.0+", examples: "Ohio State, Purdue, Illinois, Wisconsin" },
              { tier: "Scholarships", sat: "1200+", ielts: "Band 6.5+", examples: "Merit-based financial aid at most universities" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <span className="text-[11px] font-semibold text-accent">{item.tier}</span>
                  <div className="mt-3 mb-3">
                    <p className="text-xl font-display font-bold text-foreground">{item.sat}</p>
                    <p className="text-xs text-muted-foreground">SAT Score</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-lg font-display font-bold text-foreground">{item.ielts}</p>
                    <p className="text-xs text-muted-foreground">IELTS Score</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground border-t border-border pt-3">{item.examples}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CREATOR PREVIEW ============ */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">For Educators</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Teachers create. Students practice. Everyone grows.</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  IvyBridge isn't just a student platform — it's a creator marketplace. Teachers and educators can publish their own SAT and IELTS tests, build a reputation, attract students, and grow their audience. All you need to do is upload your test file and answer structure. Our system handles the rest.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/creators" className="px-6 py-2.5 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Become a Creator <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={creatorHeroImg} alt="Educator creating content" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Upload, title: "Simple Upload", desc: "Drag and drop your test file and answer key. We support PDF, DOCX, and plain text. No technical skills needed." },
              { icon: Zap, title: "Auto Processing", desc: "Our system automatically detects questions, extracts answers, and structures everything into an interactive test." },
              { icon: Star, title: "Build Reputation", desc: "Students rate and review your tests. High ratings lead to better visibility, featured placements, and more students." },
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

      {/* ============ HOW IT WORKS ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get started in 3 simple steps</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Whether you're a student or an educator, getting started with IvyBridge takes just minutes.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Create Account", desc: "Sign up for free in under a minute. No credit card required. Choose your role as a student or creator." },
              { step: "02", title: "Take or Upload Tests", desc: "Students browse and take practice tests. Creators upload test files and answer structures." },
              { step: "03", title: "Track & Grow", desc: "Students track scores and improve. Creators build reputation and grow their student base." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <span className="text-3xl font-display font-bold text-accent/30">{item.step}</span>
                  <h3 className="text-base font-display font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What our users say</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { quote: "IvyBridge helped me go from 1280 to 1480 on my SAT. The practice tests are incredibly realistic and the analytics showed me exactly where to focus.", name: "Sarah K.", role: "Student, accepted to Columbia", score: "1480 SAT" },
              { quote: "As a teacher, publishing my tests on IvyBridge has been a game-changer. I've reached over 2,000 students globally and built a strong reputation as an educator.", name: "Prof. Ahmed R.", role: "SAT Tutor, 4.9★ rating", score: "2,000+ students" },
              { quote: "The IELTS mock tests are perfectly calibrated. I scored Band 7.5 on my first attempt after practicing with IvyBridge for just 6 weeks.", name: "Li Wei", role: "International Student, China", score: "Band 7.5 IELTS" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full glow-border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 italic">"{item.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-[11px] text-muted-foreground">{item.role}</p>
                    <span className="inline-block mt-2 text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{item.score}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHOOSE YOUR PATH ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Choose your path</h2>
              <p className="text-sm text-muted-foreground">Whether you're preparing for exams or creating content — IvyBridge has you covered.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="glass rounded-xl p-8 h-full glow-border flex flex-col">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3">For Students</span>
                <h3 className="text-2xl font-display font-bold mb-3">SAT & IELTS Prep</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                  Access full-length practice tests for SAT and IELTS, track your improvement with analytics, practice timed sections, and get personalized study recommendations.
                </p>
                <Link to="/sat" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  Start practicing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="glass rounded-xl p-8 h-full glow-border flex flex-col">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3">For Educators</span>
                <h3 className="text-2xl font-display font-bold mb-3">Creator Platform</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                  Publish professional tests, build your reputation, grow your audience, and help students around the world. Simple upload, automated processing, transparent reviews.
                </p>
                <Link to="/creators" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  Become a creator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center glow-border relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to start your journey?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                  Join 50,000+ students and 3,200+ educators who trust IvyBridge for SAT and IELTS preparation. Start with a free practice test today.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="px-8 py-3.5 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Get Started Free <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
