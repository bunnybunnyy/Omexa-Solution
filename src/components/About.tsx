import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const highlights = [
  { text: "Award-winning design team", icon: Award },
  { text: "Agile development process", icon: CheckCircle },
  { text: "24/7 dedicated support", icon: Users },
  { text: "Global client base", icon: TrendingUp },
];

const stats = [
  { value: "150+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "4+", label: "Years" },
  { value: "100%", label: "Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Minimal Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-normal text-xs tracking-wider uppercase mb-3 block font-light">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
              We're a Team of <span className="text-gradient font-bold ">Passionate</span> Creators
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Founded in 2021, TECHEXA has grown from a small studio into a full-service 
              digital agency. We combine creativity with technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed font-light">
                Our diverse team of designers, developers, and strategists work 
                collaboratively to transform ideas into impactful digital experiences.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
  {highlights.map((item) => (
    <div 
      key={item.text} 
      className="group flex items-start gap-3 p-5 rounded-xl bg-card/50 border border-border/30 
                 hover:border-primary/40 hover:shadow-lg transition-all duration-300 
                 min-h-[100px] cursor-pointer relative overflow-hidden"
    >
      {/* Optional background shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      
      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center 
                      flex-shrink-0 mt-2 group-hover:bg-primary/10 z-10 transition-colors duration-300">
        <item.icon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="z-10">
        <span className="text-foreground text-sm font-light leading-relaxed mt-4 
                         group-hover:text-primary transition-colors duration-300 
                         relative inline-block">
          {item.text}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary 
                           group-hover:w-full transition-all duration-300"></span>
        </span>
      </div>
    </div>
  ))}
</div>

              <div className="p-6 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm min-h-[120px] flex items-center">
                <p className="text-foreground text-sm font-light leading-relaxed">
                  "We believe in the power of collaboration and innovation. Every project 
                  is an opportunity to push boundaries and create something extraordinary."
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card/80 backdrop-blur-md border border-border/30 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[
                      "https://i.postimg.cc/MZDfp92P/Whats-App-Image-2026-01-02-at-11-17-56-AM.jpg",
                      "https://i.postimg.cc/qqfwBQP7/team-8.png",
                      "https://i.postimg.cc/jjfLYbrG/20251205-160110(1).jpg",
                      "https://i.postimg.cc/FR8vrfgx/team-3.png"
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Team member ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-card shadow-sm object-cover"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground text-sm font-medium mb-1">10+ Team Members</p>
                <p className="text-muted-foreground text-xs font-light">
                  Working together
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="group p-8 rounded-xl bg-card/50 border border-border/30 text-center 
                 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/40 
                 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm 
                 min-h-[140px] flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="font-display text-3xl md:text-4xl font-semibold text-gradient mb-2 
                      group-hover:scale-105 transition-transform duration-300">
        {stat.value}
      </div>
      <div className="text-xs text-muted-foreground font-light 
                      group-hover:text-primary/70 transition-colors duration-300">
        {stat.label}
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
