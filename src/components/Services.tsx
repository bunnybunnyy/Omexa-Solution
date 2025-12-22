import { Code, Palette, Megaphone, Zap, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "We craft distinctive brand identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technology and optimized for performance.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that amplify your reach and convert visitors into customers.",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces that delight users and enhance engagement with your brand.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Scalable online stores with seamless checkout experiences that drive sales and growth.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your digital presence secure and up-to-date.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Services That Drive <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to launch, we provide end-to-end digital solutions 
            tailored to your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
