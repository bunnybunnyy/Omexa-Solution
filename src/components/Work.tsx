import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Horizon Finance",
    category: "Fintech Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Bloom Studio",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    color: "from-pink-500/20 to-orange-500/20",
  },
  {
    title: "Nova Tech",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Evergreen",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href="#"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-primary text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
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
