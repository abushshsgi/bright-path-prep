import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            ivy<span className="text-gradient">bridge</span>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-[200px]">
            The modern platform for SAT & IELTS preparation and test creation.
          </p>
        </div>

        {[
          {
            title: "Platform",
            items: ["SAT Preparation", "IELTS Mock Tests", "Practice Tests", "Score Analytics", "Creator Tools"],
          },
          {
            title: "For Creators",
            items: ["Upload Tests", "Build Reputation", "Student Reviews", "Creator Dashboard", "Invite Students"],
          },
          {
            title: "Resources",
            items: ["Study Guides", "Blog", "Help Center", "Community", "API Docs"],
          },
          {
            title: "Company",
            items: ["About", "Careers", "Privacy", "Terms", "Contact"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">{col.title}</h4>
            <div className="flex flex-col gap-2">
              {col.items.map((item) => (
                <span key={item} className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-muted-foreground">© 2026 IvyBridge. All rights reserved.</p>
        <div className="flex gap-5">
          {["Twitter", "LinkedIn", "GitHub", "Discord"].map((s) => (
            <span key={s} className="text-[11px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
