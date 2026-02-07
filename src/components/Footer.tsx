import { Github, Twitter, Linkedin, Facebook, Video, Briefcase, Instagram, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Team", href: "#team" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Brand Strategy", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
    ],
    resources: [
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Partners", href: "#" },
    ],
    social: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-umar-461b313a8/", label: "LinkedIn" },
      { icon: Facebook, href: "https://www.facebook.com/techexadigitalservice/", label: "Facebook" },
      { icon: Github, href: "https://github.com/bunnybunnyy", label: "GitHub" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Briefcase, href: "https://www.behance.net/hunnybunnyy", label: "Behance" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#00c4c9]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Brand Section - Centered */}
        <div className="text-center mb-16">
        <a href="#" className="font-display text-5xl md:text-6xl font-bold text-[#093b79] inline-block mb-4 tracking-tighter hover:text-white hover:[-webkit-text-stroke:2px_#093b79] transition-all">
            OMEXA <span className="text-gradient animate-gradient">.</span>
          </a>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Crafting exceptional digital experiences that drive business growth and innovation.
          </p>
          
          {/* Social Links - Centered */}
          <div className="flex gap-3 justify-center mt-6">
  {links.social.map((item) => (
    <a
      key={item.label}
      href={item.href}
      aria-label={item.label}
      className="w-12 h-12 rounded-xl bg-muted/40 hover:bg-[#093b79] flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
    >
      <item.icon className="w-5 h-5" />
    </a>
  ))}
</div>
        </div>

        {/* Links Section - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 justify-items-center ">
          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-base uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 -ml-1">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                  className="text-muted-foreground hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6  text-base uppercase tracking-wider ml-5">Services</h4>
            <ul className="space-y-3 -ml-1">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-base uppercase tracking-wider ml-1">Resources</h4>
            <ul className="space-y-3 -ml-1">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                  className="text-muted-foreground hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-light text-center md:text-left">
            © {currentYear} OMEXA SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;