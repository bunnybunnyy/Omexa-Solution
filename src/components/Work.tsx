import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Maison Laurent",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    title: "Vertex Capital",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    title: "Bloom Wellness",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    title: "Artisan Coffee",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    year: "2023",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-warm opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium">
              Featured <em className="not-italic text-gradient">Projects</em>
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors group text-sm tracking-wide"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-sm tracking-wide">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground text-sm">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass-warm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
