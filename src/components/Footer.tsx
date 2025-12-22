import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Brand Strategy", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
    ],
    social: [
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Github, href: "#", label: "GitHub" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold text-foreground inline-block mb-4">
              NEXUS<span className="text-gradient">.</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting exceptional digital experiences that drive business growth.
            </p>
            <div className="flex gap-3">
              {links.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
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

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nexus Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
