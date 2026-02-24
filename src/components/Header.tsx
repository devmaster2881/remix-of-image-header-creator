import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Trainings", path: "/services" },
    { name: "Resources", path: "/about" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-white rounded-full px-6 py-3 shadow-sm border border-border/20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="TBH Circle" className="h-10 w-10" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
                activeClassName="text-foreground font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full px-5 py-2 text-sm font-medium border-border/40 gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 py-2 text-sm font-medium gap-2">
              Start Your Journey
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
