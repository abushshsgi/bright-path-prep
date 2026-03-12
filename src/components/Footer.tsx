import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
            Ivy<span className="text-accent">Bridge</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The modern platform for SAT preparation and test creation. Connecting students with expert educators worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">Platform</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/sat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SAT Preparation</Link>
            <Link to="/creators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Creators</Link>
            <span className="text-sm text-muted-foreground">Practice Tests</span>
            <span className="text-sm text-muted-foreground">Score Analytics</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">Resources</h4>
          <div className="flex flex-col gap-2.5">
            <span className="text-sm text-muted-foreground">Study Guides</span>
            <span className="text-sm text-muted-foreground">Blog</span>
            <span className="text-sm text-muted-foreground">Help Center</span>
            <span className="text-sm text-muted-foreground">Community</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">Company</h4>
          <div className="flex flex-col gap-2.5">
            <span className="text-sm text-muted-foreground">About</span>
            <span className="text-sm text-muted-foreground">Careers</span>
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 IvyBridge. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-xs text-muted-foreground">Twitter</span>
          <span className="text-xs text-muted-foreground">LinkedIn</span>
          <span className="text-xs text-muted-foreground">Instagram</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
