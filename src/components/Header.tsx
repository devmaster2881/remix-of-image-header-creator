import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-[#FFF9E8] rounded-full px-10 py-4 shadow-sm border border-border/20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-script text-[#000000] tracking-wide">Vygnee</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-sm text-[#000000]/60 hover:text-[#000000] transition-colors font-medium"
                activeClassName="text-[#000000]"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <Button className="bg-[#0816A0] text-white hover:bg-[#0816A0]/90 rounded-full px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
