import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Let's Connect
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Ready to Create
              <br />
              <em className="not-italic text-gradient">Something Beautiful?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We'd love to hear about your vision. Let's discuss how we can 
              bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Mail, label: "Email", value: "hello@atelier.studio", href: "mailto:hello@atelier.studio" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
              { icon: MapPin, label: "Studio", value: "New York, NY", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-foreground font-medium group-hover:text-gradient transition-all duration-300">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* CTA Box */}
          <div className="glass-warm rounded-3xl p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-4xl font-medium mb-4">
              Start Your Project Today
            </h3>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Book a complimentary consultation to explore how we can elevate 
              your brand and digital presence.
            </p>
            <Button variant="hero" size="xl">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
