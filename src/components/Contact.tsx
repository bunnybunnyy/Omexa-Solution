import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? We'd love to hear about your project 
              and explore how we can help bring your vision to life.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email Us", value: "hello@nexus.agency" },
              { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Visit Us", value: "New York, NY" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a free consultation with our team to discuss your goals 
              and how we can help achieve them.
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
