import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Github, Mail, ArrowRight, Star, Zap, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Muhammad Umar",
    role: "Founder",
    image: "https://i.postimg.cc/jjfLYbrG/20251205-160110(1).jpg",
    bio: "Founder of the company, specializing in modern, scalable, and user-focused web solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/muhammad-umar-461b313a8/",
      github: "https://github.com/bunnybunnyy",
      behance: "https://muhammad-umar-developer.vercel.app/",
      email: "hanifumar169@gmail.com", // replace with your email
    },
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGradient: "from-emerald-500/5 to-teal-500/5",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white">
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span className="text-sm text-slate-700 font-medium">Founder</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Founder Behind
            </span>
            <br />
            <span className="text-gradient font-bold bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Meet the founder behind our digital solutions
          </p>
        </div>

        {/* Founder Card */}
        <div className="grid justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative w-80">
              {/* Animated Gradient Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/60 overflow-hidden shadow-xl">
                {/* Top Gradient Bar */}
                <div className={` bg-gradient-to-r ${member.gradient}`} />

                {/* Card Content */}
                <div className="p-8">
                  {/* Avatar Section */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`} />

                    <div className="relative w-32 h-32 mx-auto">
                      <Avatar className="w-full h-full border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white font-bold text-2xl`}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="text-center space-y-3 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>

                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20`}>
                      <Star className="w-3.5 h-3.5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">{member.role}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${member.gradient} opacity-20 mb-6`} />

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-[#0077B5]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/20 group/icon"
                      >
                        <Linkedin className="w-4.5 h-4.5 text-slate-600 group-hover/icon:text-[#0077B5] transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-slate-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-700/20 group/icon"
                      >
                        <Github className="w-4.5 h-4.5 text-slate-600 group-hover/icon:text-slate-900 transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.behance && (
                      <a
                        href={member.social.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-[#053EFF]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#053EFF]/20 group/icon"
                      >
                        <Globe className="w-4.5 h-4.5 text-slate-600 group-hover/icon:text-[#053EFF] transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-11 h-11 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-purple-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/20 group/icon"
                      >
                        <Mail className="w-4.5 h-4.5 text-slate-600 group-hover/icon:text-purple-600 transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>

                <div className={` bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
