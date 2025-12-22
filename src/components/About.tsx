const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Awards Won" },
  { value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-warm opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Where <em className="not-italic text-gradient">Passion</em> Meets Purpose
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2012, Atelier began as a small studio with a big vision: 
                to create digital experiences that truly matter. Today, we're a 
                full-service creative agency trusted by brands worldwide.
              </p>
              <p>
                We believe great design is invisible—it feels effortless while 
                achieving remarkable results. Every pixel, every line of code, 
                every strategic decision is made with intention.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-medium text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop"
                  alt="Our Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 glass-warm p-6 rounded-2xl max-w-[280px]">
                <p className="font-display text-lg font-medium text-foreground mb-2">
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <p className="text-primary text-sm">— Our Philosophy</p>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full" />
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
