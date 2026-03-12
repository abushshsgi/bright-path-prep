import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, BarChart3, Clock, Star, Shield } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import studentsHeroImg from "@/assets/students-hero.jpg";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">SAT & Test Preparation Platform</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                The smarter way to <span className="text-accent">prepare</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                IvyBridge connects ambitious students with expert-crafted SAT practice tests and a community of educators. Practice, analyze, and improve — all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/sat" className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Explore SAT Prep <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/creators" className="px-7 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                  For Educators
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Features overview */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Built for results</h2>
              <p className="text-muted-foreground">Everything you need to achieve your target SAT score, powered by a community of expert educators.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Practice Tests", desc: "Full-length, expertly crafted SAT practice tests that mirror the real exam format." },
              { icon: BarChart3, title: "Score Analytics", desc: "Track your progress with detailed score breakdowns and personalized study recommendations." },
              { icon: Clock, title: "Timed Sections", desc: "Master time management with section-by-section practice under real test conditions." },
              { icon: Users, title: "Creator Marketplace", desc: "Access tests from thousands of verified educators and tutors worldwide." },
              { icon: Star, title: "Reviews & Ratings", desc: "Transparent quality ratings help you find the best tests from the best creators." },
              { icon: Shield, title: "Trusted Platform", desc: "Used by 50,000+ students with a 95% satisfaction rate and proven score improvements." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-7 border border-border h-full">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg mb-2 font-serif">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <img src={studentsHeroImg} alt="Students studying together" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">More than just a test platform</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IvyBridge is where passionate educators and ambitious students come together. Teachers publish professional-quality tests, students practice and improve, and everyone benefits from a transparent community built on quality and trust.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: "50K+", label: "Active Students" },
                    { num: "3,200+", label: "Educators" },
                    { num: "15K+", label: "Tests Available" },
                    { num: "+180", label: "Avg. Score Gain" },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-foreground">{s.num}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Two paths CTA */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Choose your path</h2>
              <p className="text-muted-foreground">Whether you're a student or an educator, IvyBridge has everything you need.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="bg-card rounded-xl p-8 border border-border h-full flex flex-col">
                <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">For Students</span>
                <h3 className="text-2xl mb-3 font-serif">SAT Preparation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Access full-length practice tests, track your score improvement with analytics, and prepare for test day with timed sections.
                </p>
                <Link to="/sat" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="bg-card rounded-xl p-8 border border-border h-full flex flex-col">
                <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">For Educators</span>
                <h3 className="text-2xl mb-3 font-serif">Creator Platform</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Publish your tests, build your reputation, and reach students worldwide. Upload content — we handle the rest.
                </p>
                <Link to="/creators" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
