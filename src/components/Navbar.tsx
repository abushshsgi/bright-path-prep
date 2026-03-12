import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/sat", label: "SAT Prep" },
    { to: "/creators", label: "Creators" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          ivy<span className="text-gradient">bridge</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] font-medium px-4 py-2 rounded-lg transition-all ${
                isActive(l.to)
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Log in
          </button>
          <button className="text-[13px] font-medium px-5 py-2 rounded-lg bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg ${
                    isActive(l.to) ? "text-foreground bg-secondary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <button className="w-full text-sm font-medium px-5 py-2.5 rounded-lg bg-gradient-accent text-accent-foreground">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
