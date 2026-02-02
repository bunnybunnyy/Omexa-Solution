import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter, Github, Mail, ArrowRight, Star, Zap, Globe } from "lucide-react";
const teamMembers = [
  {
    name: "Hamza Kayani",
    role: "Chief Executive Officer",
    image: "https://i.postimg.cc/MZDfp92P/Whats-App-Image-2026-01-02-at-11-17-56-AM.jpg",
    bio: "A visionary leader with extensive expertise in E-Commerece Business Field-",
    social: {
      linkedin: "https://www.linkedin.com/in/hamza-kayani-pod-expert/",
      behance: "https://www.behance.net/hamzakayani3/",
      email: "hamzakayani371@gmail.com",
    },
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    name: "farooq Khan",
    role: "Full-Stack Developer",
    image: "https://i.postimg.cc/qqfwBQP7/team-8.png",
    bio: "Senior Full-Stack Developer | 4+ Years Experience",
    social: {
      linkedin: "https://www.linkedin.com/in/farooq-khan-1b881735b/",
      github: "https://github.com/arooqkhan/",
      email: "farooqbsse@gmail.com",
    },
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    name: "Muhammad Umar",
    role: "Front-End Developer & Designer" ,
    image: "https://i.postimg.cc/jjfLYbrG/20251205-160110(1).jpg",
    bio: "Front-End Developer Specializing in Modern, Scalable UI Solutions |3 Years Experience",
    social: {
      linkedin: "https://www.linkedin.com/in/muhammad-umar-461b313a8/",
      github: "https://github.com/bunnybunnyy",
      behance: "https://muhammad-umar-developer.vercel.app/",
    },
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGradient: "from-emerald-500/5 to-teal-500/5",
  },
  {
    name: " Hafiz Auf Bin Sohail",
    role: "Amazon Expert",
    image: "https://i.postimg.cc/HsLns5gr/Whats-App-Image-2026-01-02-at-10-56-55-AM.jpg",
    bio: "Amazon Growth Expert Driving Sales Through Strategy & Optimization",
    social: {
      linkedin: "https://www.linkedin.com/in/auf-bhatti-5a4392338/",
      email: "aufbinsohailVA@gmail.com",
    },
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-500/5 to-amber-500/5",
  },
  {
    name: "Moiz Bhatti",
    role: "Flutter Developer",
    image: "https://i.postimg.cc/JzZL14GN/Whats-App-Image-2026-01-02-at-10-58-05-AM.jpg",
    bio: "Specializing in Cross-Platform Mobile Development with Flutter",
    social: {
      linkedin: "https://www.linkedin.com/in/moiz-bhatti-8aa446253/",
      github: "https://github.com/moizbhatti112?tab=repositories/" ,
      email: "moizbhatti112@gmail.com",
    },
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    bgGradient: "from-rose-500/5 to-pink-500/5",
  },
  {
    name: "Umar Khalid",
    role: "HR",
    image: "https://i.postimg.cc/FR8vrfgx/team-3.png",
    bio: "Dedicated to fostering a positive and inclusive workplace culture..",
    social: {
      linkedin: "https://www.linkedin.com/in/umarkhalid0034/",
      behance: "https://www.behance.net/hamzakayani3/",
      email: "hamzakayani371@gmail.com",
    },
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    bgGradient: "from-violet-500/5 to-indigo-500/5",
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
            <span className="text-sm text-slate-700 font-medium">Meet the Team</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Innovators Driving
            </span>
            <br />
            <span className="text-gradient font-bold bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Meet the creative minds behind our cutting-edge solutions
          </p>
        </div>

        {/* Team Grid - Ultra Modern Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`} />
                    
                    {/* Avatar Container */}
                    <div className="relative w-32 h-32 mx-auto">
                      {/* Rotating Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500`} style={{ animationDuration: "3s" }} />
                      
                      <Avatar className="w-full h-full border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white font-bold text-2xl`}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Online Status */}
                      <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-4 border-white shadow-lg" />
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
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-[#1DA1F2]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA1F2]/20 group/icon"
                      >
                        <Twitter className="w-4.5 h-4.5 text-slate-600 group-hover/icon:text-[#1DA1F2] transition-colors duration-300" />
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

                {/* Bottom Accent */}
                <div className={` bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-20" />
          
          <div className="relative rounded-3xl bg-white/60 backdrop-blur-l border border-slate-200/60 p-10 md:p-12 overflow-hidden shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Join Our Team of
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold">
                    Visionaries
                  </span>
                </h3>
                <p className="text-slate-600 text-base max-w-lg">
                  We're always looking for talented individuals to help us push boundaries and create exceptional experiences.
                </p>
              </div>
              
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Explore Careers</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;