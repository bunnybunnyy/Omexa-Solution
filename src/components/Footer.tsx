import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    studio: [
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Brand Identity", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "Digital Strategy", href: "#services" },
      { name: "Creative Direction", href: "#services" },
    ],
    social: [
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Dribbble, href: "#", label: "Dribbble" },
    ],
  };

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#" className="font-display text-3xl font-medium text-foreground inline-block mb-6">
              Atelier<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              A creative studio crafting timeless digital experiences for 
              brands that dare to stand out.
            </p>
            <div className="flex gap-3">
              {links.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-display text-sm font-medium text-foreground mb-6 tracking-wide">
              Studio
            </h4>
            <ul className="space-y-4">
              {links.studio.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-medium text-foreground mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-medium text-foreground mb-6 tracking-wide">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for design insights and studio updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Atelier Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
