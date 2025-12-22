import { Palette, Code, Megaphone, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Brand Identity",
    description: "Strategic brand development that captures essence and creates lasting recognition in the marketplace.",
  },
  {
    icon: Code,
    number: "02",
    title: "Web Development",
    description: "Bespoke websites and applications built with precision, performance, and scalability in mind.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Digital Strategy",
    description: "Data-informed strategies that amplify your presence and convert audiences into loyal customers.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Creative Direction",
    description: "Visionary creative guidance that ensures consistency and excellence across all touchpoints.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Services Designed for <em className="not-italic text-gradient">Excellence</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer a comprehensive suite of services that transform ideas 
              into impactful digital realities. Each project is approached with 
              meticulous attention to detail.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display text-5xl text-border group-hover:text-primary/20 transition-colors duration-300">
                  {service.number}
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-4 group-hover:text-gradient transition-all duration-300">
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
