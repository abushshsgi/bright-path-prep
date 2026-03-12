import { BookOpen, Target, Clock, BarChart3, GraduationCap, Globe, TrendingUp, CheckCircle2, Users, Award, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import satPracticeImg from "@/assets/sat-practice-ui.jpg";
import scoreAnalyticsImg from "@/assets/score-analytics-ui.jpg";
import timedSectionsImg from "@/assets/timed-sections-ui.jpg";
import studentsHeroImg from "@/assets/students-hero.jpg";

const SATPrep = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">SAT Preparation</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Your path to a <span className="text-accent">perfect SAT score</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  IvyBridge provides the most comprehensive SAT preparation experience. Practice with real-format tests, track your progress with detailed analytics, and master every section with timed practice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                    Start Practicing Free
                  </button>
                  <button className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                    View Sample Tests
                  </button>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative">
                <img src={studentsHeroImg} alt="Students preparing for SAT" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Average Improvement</p>
                      <p className="text-lg font-bold text-foreground">+180 points</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What is SAT */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Understanding the SAT</span>
              <h2 className="text-3xl md:text-4xl mb-6">What is the SAT and why does it matter?</h2>
              <p className="text-muted-foreground leading-relaxed">
                The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States. It evaluates a student's readiness for college and provides a common data point that all colleges can use to compare applicants. Scoring well on the SAT can open doors to top universities, merit-based scholarships, and competitive academic programs.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Reading & Writing", desc: "The Evidence-Based Reading and Writing section tests your ability to comprehend complex passages, analyze arguments, and apply grammar and usage rules in context. You'll encounter passages from literature, history, social sciences, and natural sciences." },
              { icon: Target, title: "Mathematics", desc: "The Math section covers algebra, problem-solving and data analysis, advanced math, and additional topics like geometry and trigonometry. It tests your ability to apply mathematical concepts to real-world problems." },
              { icon: Clock, title: "Timed Format", desc: "The SAT is a timed test lasting approximately 3 hours. Each section has strict time limits that require strategic pacing. Learning to manage your time effectively is just as important as knowing the material." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs SAT */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Who needs SAT prep?</span>
              <h2 className="text-3xl md:text-4xl mb-6">SAT preparation is for every ambitious student</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a high school junior starting early, a senior looking to improve your score, or an international student planning to study in the US — proper SAT preparation is the key to unlocking your academic potential.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "High School Students", desc: "Juniors and seniors aiming for competitive college admissions and merit scholarships." },
              { icon: Globe, title: "International Students", desc: "Students from around the world preparing to study at US colleges and universities." },
              { icon: TrendingUp, title: "Score Improvers", desc: "Students who have taken the SAT before and want to significantly improve their scores." },
              { icon: Award, title: "Scholarship Seekers", desc: "Students who need high SAT scores to qualify for merit-based financial aid and scholarships." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg mb-2 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How IvyBridge helps — Practice Tests */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">How IvyBridge Helps</span>
              <h2 className="text-3xl md:text-4xl mb-6">Everything you need to ace the SAT</h2>
              <p className="text-muted-foreground leading-relaxed">
                IvyBridge combines expertly crafted practice tests, intelligent analytics, and timed sections to create the most effective SAT preparation experience available online.
              </p>
            </div>
          </SectionReveal>

          {/* Feature 1: Practice Tests */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">Practice Tests</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 font-serif">Full-length SAT practice tests</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our practice tests mirror the actual SAT format exactly. Each test includes the same number of questions, the same difficulty distribution, and the same section structure you'll encounter on test day. Created by experienced SAT tutors and educators who understand what it takes to score 1500+.
                </p>
                <ul className="space-y-3">
                  {["Exact SAT format with all sections", "Questions reviewed by expert educators", "New tests added monthly", "Detailed explanations for every answer"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={satPracticeImg} alt="SAT practice test interface" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
          </div>

          {/* Feature 2: Score Analytics */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <SectionReveal delay={0.15} className="order-2 md:order-1">
              <img src={scoreAnalyticsImg} alt="Score analytics dashboard" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">Score Analytics</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 font-serif">Track your progress with precision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our analytics dashboard gives you a complete picture of your SAT preparation journey. See your score trends over time, identify your strongest and weakest areas, and get personalized recommendations on what to study next. Data-driven preparation leads to better results.
                </p>
                <ul className="space-y-3">
                  {["Score trends and historical performance", "Section-by-section breakdowns", "Weakness identification and study recommendations", "Percentile ranking comparisons"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          {/* Feature 3: Timed Sections */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">Timed Sections</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 font-serif">Master time management</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Time pressure is one of the biggest challenges on the SAT. Our timed section practice helps you develop the pacing skills you need. Practice individual sections with real time constraints, review your time usage, and learn strategies for when to skip and when to push through difficult questions.
                </p>
                <ul className="space-y-3">
                  {["Real SAT time limits per section", "Pause and resume functionality", "Time-per-question analysis", "Pacing strategies and tips"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={timedSectionsImg} alt="Timed test sections interface" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why SAT Prep Matters */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl mb-6">Why SAT preparation is essential</h2>
              <p className="text-muted-foreground leading-relaxed">
                The SAT isn't just another test — it's a gateway to your future. Proper preparation doesn't just improve your score; it builds the critical thinking and problem-solving skills that will serve you throughout college and beyond.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "College Admissions", desc: "Your SAT score is one of the most important factors in college admissions. A strong score can set you apart from thousands of other applicants and increase your chances of getting into your dream school. Admissions committees use SAT scores as a standardized measure to evaluate students from different educational backgrounds fairly." },
              { title: "Scholarship Opportunities", desc: "Many merit-based scholarships require a minimum SAT score. A higher score can mean the difference between paying full tuition and receiving a full ride. Some scholarships are exclusively available to students who achieve scores above certain thresholds, making SAT preparation a direct investment in your financial future." },
              { title: "Academic Confidence", desc: "Structured SAT preparation builds more than test-taking skills. It develops reading comprehension, analytical reasoning, and mathematical fluency that carry over into college coursework. Students who prepare thoroughly for the SAT report feeling more confident and better prepared for the academic rigor of college." },
              { title: "Competitive Edge", desc: "In an increasingly competitive admissions landscape, every point matters. Students who invest in quality SAT preparation consistently outperform those who don't. The skills and strategies you learn during preparation — time management, strategic guessing, process of elimination — are invaluable life skills." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <h3 className="text-xl mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* University Admissions */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">University Admissions</span>
                <h2 className="text-3xl md:text-4xl mb-6 text-primary-foreground">Prepare for top university admissions</h2>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  The college admissions process is more competitive than ever. With acceptance rates at top universities dropping below 5%, every element of your application needs to shine. Your SAT score is one of the few objective, standardized measures that admissions officers rely on to compare students from different schools, states, and countries.
                </p>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  IvyBridge helps you prepare strategically by simulating the real test environment, identifying your weaknesses early, and providing the focused practice you need to reach your target score. Our students consistently achieve scores in the 90th percentile and above.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  {[
                    { num: "1500+", label: "Avg. Top Score" },
                    { num: "92%", label: "Score Improvement" },
                    { num: "50K+", label: "Students Helped" },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-accent">{s.num}</p>
                      <p className="text-xs text-primary-foreground/60 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="space-y-4">
                {[
                  { school: "Ivy League Universities", rate: "Target: 1500+" },
                  { school: "Top 25 National Universities", rate: "Target: 1400+" },
                  { school: "Top 50 Universities", rate: "Target: 1300+" },
                  { school: "Scholarship Eligibility", rate: "Target: 1200+" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-foreground/5 rounded-lg p-5 border border-primary-foreground/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-foreground">{item.school}</span>
                      <span className="text-xs text-accent font-semibold">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* International Students */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { country: "🇺🇿 Uzbekistan", students: "2,400+ students" },
                  { country: "🇰🇷 South Korea", students: "18,000+ students" },
                  { country: "🇮🇳 India", students: "65,000+ students" },
                  { country: "🇨🇳 China", students: "120,000+ students" },
                  { country: "🇳🇬 Nigeria", students: "8,500+ students" },
                  { country: "🇧🇷 Brazil", students: "12,000+ students" },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-lg p-4 border border-border">
                    <p className="text-lg mb-1">{item.country}</p>
                    <p className="text-xs text-muted-foreground">{item.students}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">International Students</span>
                <h2 className="text-3xl md:text-4xl mb-6">Preparing international students for US colleges</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every year, hundreds of thousands of international students take the SAT as part of their journey to studying in the United States. For these students, the SAT represents not just an academic challenge, but a cultural one — the test format, question styles, and expectations may be entirely different from what they're used to.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IvyBridge is specifically designed to help international students bridge this gap. Our platform provides context for American English usage, explains cultural references that appear in reading passages, and offers practice with the specific math concepts emphasized on the US curriculum. With students from over 80 countries, we understand the unique challenges international test-takers face.
                </p>
                <ul className="space-y-3">
                  {["Practice tests adapted for non-native English speakers", "Cultural context for reading passages", "Study schedules for different time zones", "Community of international students"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6">Trusted by students worldwide</h2>
              <p className="text-muted-foreground">
                Our numbers speak for themselves. IvyBridge has helped thousands of students achieve their target SAT scores and gain admission to their dream universities.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "50,000+", label: "Active Students" },
              { num: "2M+", label: "Tests Completed" },
              { num: "180+", label: "Avg. Score Improvement" },
              { num: "95%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{s.num}</p>
                  <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl mb-6">Ready to start your SAT journey?</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join thousands of students who have improved their SAT scores with IvyBridge. Start with a free practice test today and see where you stand.
              </p>
              <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Start Free Practice Test <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default SATPrep;
