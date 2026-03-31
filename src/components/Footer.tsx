import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{
      background: "linear-gradient(135deg, rgba(49,62,59,0.93) 0%, rgba(39,50,47,0.97) 100%)",
    }}>
      <div className="max-w-[1236px] mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              TBH
            </div>
            <p className="text-base font-medium text-muted-foreground max-w-[180px]">
              We are providing high-quality courses for about ten years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-lg font-medium text-white">Fb.</a>
              <a href="#" className="text-lg font-medium text-white">Ig.</a>
              <a href="#" className="text-lg font-medium text-white">Tw.</a>
              <a href="#" className="text-lg font-medium text-white">Be.</a>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Popular courses</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-base font-medium text-muted-foreground">Business finance</a>
              <a href="#" className="text-base font-medium text-muted-foreground">Advanced design</a>
              <a href="#" className="text-base font-medium text-muted-foreground">Web development</a>
              <a href="#" className="text-base font-medium text-muted-foreground">Data visualization</a>
            </nav>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Need help?</h4>
            <p className="text-base font-medium text-muted-foreground mb-1">Call us directly?</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-base font-medium">+1 234 567 8910</span>
              <span className="text-xs font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide bg-primary text-primary-foreground">FREE</span>
            </div>
            <p className="text-base font-medium text-muted-foreground mb-1">Need support?</p>
            <a href="mailto:help@domain.com" className="text-base font-medium text-white underline underline-offset-2" style={{ textDecorationColor: "rgba(232,200,64,0.6)" }}>
              help@domain.com
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Subscribe our newsletter</h4>
            <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-white text-sm font-normal"
              />
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground whitespace-nowrap cursor-pointer bg-transparent border-none">
                Submit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3 opacity-50">
              <Shield className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Protecting your privacy</span>
            </div>
          </div>
        </div>

        <hr className="mb-5" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-8">
          <nav className="flex flex-wrap gap-6">
            {["Home", "About", "Courses", "Instructors", "Testimonial", "Blog", "Contact"].map(link => (
              <a key={link} href="#" className="text-base text-muted-foreground">{link}</a>
            ))}
          </nav>
          <p className="text-base text-muted-foreground whitespace-nowrap">@2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
