import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Award-winning design team",
    "Agile development process",
    "24/7 dedicated support",
    "Global client base",
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We're a Team of <span className="text-gradient">Passionate</span> Creators
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded in 2012, Nexus has grown from a small studio into a full-service 
              digital agency. We combine creativity with technology to deliver 
              exceptional results for businesses of all sizes.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our diverse team of designers, developers, and strategists work 
              collaboratively to transform ideas into impactful digital experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-card"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+20 team members</span>
              </div>
              <p className="text-foreground font-medium">
                Working together to create something amazing
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
