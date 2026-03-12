import { Upload, Cpu, Users, Star, ArrowRight, CheckCircle2, FileText, Zap, MessageSquare, Heart, Shield, TrendingUp } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import creatorHeroImg from "@/assets/creator-hero.jpg";
import creatorUploadImg from "@/assets/creator-upload-ui.jpg";
import testProcessingImg from "@/assets/test-processing-ui.jpg";
import reviewsRatingsImg from "@/assets/reviews-ratings-ui.jpg";

const Creators = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">For Educators</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Publish your tests. <span className="text-accent">Build your audience.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  IvyBridge empowers teachers and test creators to publish professional SAT-format tests, build a reputation, and reach students worldwide. Upload your content — we handle the rest.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
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
                <img src={creatorHeroImg} alt="Teacher creating tests" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Active Creators</p>
                      <p className="text-lg font-bold text-foreground">3,200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What Creators Do */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Simple Process</span>
              <h2 className="text-3xl md:text-4xl mb-6">All you need to do is upload</h2>
              <p className="text-muted-foreground leading-relaxed">
                Creating a test on IvyBridge is remarkably simple. You don't need any technical skills. Just upload your test file and answer structure — our system handles everything else automatically.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl mb-3 font-serif">Upload Test File</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Upload your test document in PDF, DOCX, or plain text format. Include questions, answer choices, and reading passages. Our system accepts tests in any standard format — no special formatting required. Simply organize your questions as you normally would in a classroom setting.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <Upload className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl mb-3 font-serif">Upload Answer Structure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Provide the answer key and scoring structure. You can upload a separate answer document or include answers in a structured format. Specify point values, section groupings, and correct answers. The system will validate everything before publishing.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How Upload Works */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Step 1</span>
                <h2 className="text-3xl md:text-4xl mb-6">How creators upload tests</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our upload process is designed to be as frictionless as possible. Log into your creator dashboard, click "New Test," and drag-and-drop your files. You can upload multiple files at once — test document, answer key, and supplementary materials like images or graphs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Before uploading, add metadata: test title, subject area, difficulty level, and estimated completion time. This helps students find your test and sets proper expectations. You can also add tags like "SAT Math," "Reading Comprehension," or "Full Practice Test."
                </p>
                <ul className="space-y-3">
                  {["Drag-and-drop file upload", "Support for PDF, DOCX, and TXT", "Bulk upload for multiple tests", "Add metadata and tags for discoverability"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={creatorUploadImg} alt="Test upload interface" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* System Processing */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal delay={0.15} className="order-2 md:order-1">
              <img src={testProcessingImg} alt="Automated test processing" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Step 2</span>
                <h2 className="text-3xl md:text-4xl mb-6">How the system processes tests</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Once you upload your files, our intelligent processing engine takes over. The system automatically detects individual questions, extracts answer choices, identifies correct answers, and organizes everything into a structured, interactive test format.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The processing pipeline uses advanced document parsing to handle different formatting styles. Whether your test uses numbered questions, lettered choices, or custom layouts — the system adapts. It also extracts images, tables, and mathematical equations, preserving the original formatting.
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    { icon: Cpu, title: "Question Detection", desc: "AI-powered parsing identifies each question and its answer choices automatically." },
                    { icon: Zap, title: "Answer Extraction", desc: "Correct answers are matched and validated against your answer key." },
                    { icon: Shield, title: "Backend Storage", desc: "Everything is securely stored and indexed for instant access by students." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1 font-sans">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
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
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Step 3</span>
              <h2 className="text-3xl md:text-4xl mb-6">How students interact with tests</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your test is published, students can discover it through search, recommendations, or direct links. They take the test in our interactive environment with timing, progress tracking, and instant scoring. After completion, students can review their answers, read explanations, and track their improvement over time.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Take Tests", desc: "Students discover and take your tests in an immersive, distraction-free environment with real-time progress indicators and adjustable timer settings." },
              { icon: TrendingUp, title: "Get Results", desc: "Instant scoring with detailed breakdowns by section. Students see which questions they got right, which they missed, and their overall percentile ranking." },
              { icon: MessageSquare, title: "Leave Feedback", desc: "After completing a test, students rate the quality and leave detailed reviews. This feedback helps other students choose the best tests and helps you improve." },
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

      {/* Reviews & Ratings */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Reputation System</span>
                <h2 className="text-3xl md:text-4xl mb-6">How reviews and ratings work</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every test on IvyBridge has a transparent review system. After completing a test, students rate it on a 5-star scale and can leave written feedback about the quality, difficulty accuracy, and clarity of questions. These reviews are publicly visible and help build trust in the community.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a creator, your overall rating is calculated from all your test reviews. High-rated creators appear higher in search results, get featured on the homepage, and earn "Verified Educator" badges. This reputation system rewards quality and consistency, creating a marketplace where the best content rises to the top.
                </p>
                <ul className="space-y-3">
                  {["5-star rating system with written reviews", "Creator reputation score and badges", "Featured placement for top creators", "Detailed analytics on student satisfaction"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <img src={reviewsRatingsImg} alt="Reviews and ratings system" className="rounded-xl shadow-lg border border-border w-full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Build Reputation */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Grow Your Impact</span>
              <h2 className="text-3xl md:text-4xl mb-6">Build your reputation, attract students, grow your audience</h2>
              <p className="text-muted-foreground leading-relaxed">
                IvyBridge isn't just a test platform — it's a community where educators build lasting professional reputations. The more quality tests you create, the more students discover your content and follow your profile.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Build Reputation", desc: "Every quality test you publish strengthens your creator profile. Consistent high ratings lead to 'Verified Educator' status, homepage features, and priority placement in student recommendations. Your reputation becomes your brand." },
              { icon: Users, title: "Attract Students", desc: "As your ratings grow, more students discover and choose your tests. Students can follow your profile to get notified when you publish new content. Build a loyal audience of students who trust your test quality." },
              { icon: Heart, title: "Grow Your Audience", desc: "Invite your own students to the platform and expand your reach organically. Share your creator profile link on social media, in classrooms, and through educational communities. Every student you bring creates a ripple effect." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Invite Students */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Community</span>
                <h2 className="text-3xl md:text-4xl mb-6 text-primary-foreground">A community of teachers and students</h2>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  IvyBridge is built on the belief that the best educational outcomes happen when passionate teachers connect with motivated students. Our platform creates a thriving ecosystem where educators can share their expertise and students can access high-quality preparation materials from trusted sources.
                </p>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  Teachers can invite their existing students to the platform, creating a seamless bridge between classroom instruction and independent practice. Students benefit from a wider selection of tests from different educators, each bringing their unique teaching perspective and expertise.
                </p>
                <p className="text-primary-foreground/70 leading-relaxed">
                  This isn't just a testing platform — it's a marketplace where educational quality is rewarded, where creators earn recognition for their work, and where students have access to the best preparation resources available anywhere.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="space-y-4">
                {[
                  { num: "3,200+", label: "Active creators publishing tests" },
                  { num: "50,000+", label: "Students using the platform" },
                  { num: "15,000+", label: "Tests published and available" },
                  { num: "4.8/5", label: "Average creator satisfaction" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-foreground/5 rounded-lg p-5 border border-primary-foreground/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-foreground/70">{item.label}</span>
                      <span className="text-lg font-bold text-accent">{item.num}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl mb-6">Ready to share your expertise?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Join thousands of educators who are already publishing tests, building their reputation, and reaching students around the world. The sign-up process takes less than 2 minutes.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                No technical skills required. No monthly fees. Just upload your tests and start making an impact.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Create Your Creator Account <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Creators;
