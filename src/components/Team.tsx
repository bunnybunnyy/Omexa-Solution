import { Twitter, Linkedin, Dribbble } from "lucide-react";

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    bio: "Visionary leader with 15 years in brand strategy",
    socials: { twitter: "#", linkedin: "#", dribbble: "#" },
  },
  {
    name: "Marcus Rivera",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Full-stack architect obsessed with performance",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sophie Laurent",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    bio: "Award-winning designer with an eye for detail",
    socials: { twitter: "#", linkedin: "#", dribbble: "#" },
  },
  {
    name: "James Okonkwo",
    role: "Strategy Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Data-driven strategist and growth expert",
    socials: { linkedin: "#" },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Meet the <em className="not-italic text-gradient">Creatives</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collective of passionate designers, developers, and strategists 
            united by our commitment to exceptional craft.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.dribbble && (
                    <a
                      href={member.socials.dribbble}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-display text-xl font-medium mb-1 group-hover:text-gradient transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
