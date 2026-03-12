import { Upload, Cpu, Users, Star, ArrowRight, CheckCircle2, FileText, Zap, MessageSquare, Heart, Shield, TrendingUp, Award, Eye, Layers, Globe, BookOpen, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import creatorHeroImg from "@/assets/creator-hero.jpg";
import creatorUploadImg from "@/assets/creator-upload-ui.jpg";
import testProcessingImg from "@/assets/test-processing-ui.jpg";
import reviewsRatingsImg from "@/assets/reviews-ratings-ui.jpg";

const Creators = () => {
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
                  <span className="text-[11px] font-medium text-muted-foreground">For Educators & Test Creators</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-5">
                  Publish your tests. <span className="text-gradient">Build your audience.</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  IvyBridge empowers teachers and test creators to publish professional SAT and IELTS tests, build a reputation, and reach students worldwide. Upload your content — we handle the rest.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Become a Creator <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative">
                <img src={creatorHeroImg} alt="Teacher creating tests" className="rounded-xl border border-border w-full object-cover aspect-[4/3] glow-border" />
                <div className="absolute -bottom-4 -right-4 glass rounded-lg p-3 glow-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Active Creators</p>
                      <p className="text-base font-display font-bold text-foreground">3,200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">All you need to do is upload</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Creating a test on IvyBridge is remarkably simple. No technical skills required. Upload your files — our system processes everything automatically.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="glass rounded-xl p-6 h-full glow-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-display font-semibold mb-2">Upload Test File</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Upload your test document in PDF, DOCX, or plain text. Include questions, answer choices, and reading passages. Our system accepts any standard format — no special formatting needed. Just organize questions as you would in a classroom.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="glass rounded-xl p-6 h-full glow-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Upload className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-display font-semibold mb-2">Upload Answer Structure</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Provide the answer key and scoring structure. Upload a separate answer document or include answers in a structured format. Specify point values, section groupings, and correct answers. The system validates everything before publishing.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How Upload Works */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Step 1</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">How creators upload tests</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Log into your creator dashboard, click "New Test," and drag-and-drop your files. Upload multiple files at once — test document, answer key, and supplementary materials like images or graphs.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Add metadata: test title, subject area, difficulty level, and estimated completion time. Add tags like "SAT Math," "Reading Comprehension," or "Full Practice Test" to help students find your content.
                </p>
                <ul className="space-y-2.5">
                  {["Drag-and-drop file upload", "PDF, DOCX, and TXT support", "Bulk upload for multiple tests", "Metadata and tags for discoverability"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={creatorUploadImg} alt="Upload interface" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* System Processing */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal delay={0.15} className="order-2 md:order-1">
              <img src={testProcessingImg} alt="Automated processing" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Step 2</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">How the system processes tests</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our intelligent processing engine automatically detects questions, extracts answer choices, identifies correct answers, and organizes everything into a structured, interactive test format.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Advanced document parsing handles different formatting styles — numbered questions, lettered choices, custom layouts. It also extracts images, tables, and equations, preserving original formatting.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Cpu, title: "Question Detection", desc: "AI-powered parsing identifies each question and answer choices automatically." },
                    { icon: Zap, title: "Answer Extraction", desc: "Correct answers are matched and validated against your answer key." },
                    { icon: Shield, title: "Backend Storage", desc: "Everything is securely stored and indexed for instant student access." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground mb-0.5">{item.title}</h4>
                        <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Students Interact */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Step 3</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How students interact with tests</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Published tests are discoverable through search, recommendations, and direct links. Students take tests in an interactive environment with timing, progress tracking, and instant scoring.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: FileText, title: "Take Tests", desc: "Students discover and take your tests in a distraction-free environment with real-time progress and adjustable timer settings." },
              { icon: TrendingUp, title: "Get Results", desc: "Instant scoring with detailed section breakdowns. Students see which questions they got right, which they missed, and their percentile ranking." },
              { icon: MessageSquare, title: "Leave Feedback", desc: "Students rate quality and leave detailed reviews. Feedback helps others choose the best tests and helps you improve your content." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
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

      {/* Reviews & Ratings */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Reputation System</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">How reviews and ratings work</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Every test has a transparent review system. Students rate on a 5-star scale with written feedback about quality, difficulty accuracy, and question clarity. These reviews are public and build community trust.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Your overall rating is calculated from all reviews. High-rated creators get better search placement, homepage features, and "Verified Educator" badges. Quality and consistency are rewarded.
                </p>
                <ul className="space-y-2.5">
                  {["5-star rating with written reviews", "Creator reputation scores and badges", "Featured placement for top creators", "Detailed student satisfaction analytics"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={reviewsRatingsImg} alt="Reviews and ratings" className="rounded-xl border border-border w-full glow-border" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Build Reputation */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Grow Your Impact</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Build reputation, attract students, grow audience</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">IvyBridge is a community where educators build lasting professional reputations. Quality content is rewarded with visibility and growth.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Star, title: "Build Reputation", desc: "Every quality test strengthens your profile. Consistent high ratings lead to 'Verified Educator' status, homepage features, and priority placement. Your reputation becomes your brand." },
              { icon: Users, title: "Attract Students", desc: "As ratings grow, more students discover your tests. Students follow your profile for new content notifications. Build a loyal audience that trusts your quality." },
              { icon: Heart, title: "Grow Your Audience", desc: "Invite your students to the platform. Share your creator profile on social media and in classrooms. Every student you bring creates a ripple effect of organic growth." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full glow-border text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-base font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Benefits */}
      <section className="section-divider bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Why Join</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why educators choose IvyBridge</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Globe, title: "Global Reach", desc: "Reach students in 80+ countries from day one." },
              { icon: Shield, title: "Zero Cost", desc: "No monthly fees, no setup costs. Free to publish." },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Track downloads, ratings, and student engagement." },
              { icon: Award, title: "Recognition", desc: "Earn badges, featured spots, and verified status." },
              { icon: BookOpen, title: "Content Freedom", desc: "Publish any format — SAT, IELTS, custom tests." },
              { icon: Layers, title: "Easy Management", desc: "Edit, update, or unpublish tests anytime." },
              { icon: Eye, title: "Visibility", desc: "SEO-optimized profiles and test pages." },
              { icon: MessageSquare, title: "Direct Feedback", desc: "Get student reviews to improve your content." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 h-full glow-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-xs font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="glass rounded-2xl p-8 md:p-12 glow-border">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-3 block">Community</span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">A community of teachers and students</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    IvyBridge creates a thriving ecosystem where passionate teachers connect with motivated students. Teachers share expertise, students access quality materials from trusted sources, and everyone benefits.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Invite your existing students, creating a seamless bridge between classroom instruction and independent practice. This isn't just testing — it's a marketplace where educational quality is rewarded.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { num: "3,200+", label: "Active creators publishing tests" },
                    { num: "50,000+", label: "Students using the platform" },
                    { num: "15,000+", label: "Tests published and available" },
                    { num: "4.8/5", label: "Average creator satisfaction" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-display font-bold text-accent">{item.num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center glow-border relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to share your expertise?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-lg mx-auto">
                  Join thousands of educators who are already publishing tests and reaching students worldwide.
                </p>
                <p className="text-xs text-muted-foreground mb-8">No technical skills required. No fees. Just upload and start making an impact.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="px-8 py-3.5 rounded-lg bg-gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Create Your Account <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                    Contact Us
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

export default Creators;
