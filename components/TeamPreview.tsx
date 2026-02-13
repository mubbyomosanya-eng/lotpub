'use client';

import { Linkedin, Github, Mail, ArrowRight } from "lucide-react"; // ADD ArrowRight here
import Link from "next/link";

const teamMembers = [
  {
    name: "Mubarak",
    role: "CEO & Founder",
    title: "Lead Developer & Engineer",
    color: "blue",
    skills: ["Full-Stack Dev", "Game Development", "3D Modeling"],
    programming: "HTML, CSS, JS, Node.js, React, Next.js, Godot, Blender",
    age: 16,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Abdullah",
    role: "Co-CEO & Founder",
    title: "Full-Stack Developer",
    color: "green",
    skills: ["Frontend Wizard", "UI/UX Design", "Backend Logic"],
    programming: "HTML, CSS, JS, Node.js, React, Next.js, Tailwind",
    age: 15,
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    name: "Ameer",
    role: "Operations Manager",
    title: "Finance & Strategy",
    color: "red",
    skills: ["Financial Management", "Project Coordination", "Client Relations"],
    programming: "Microsoft Excel, Financial Planning, Operations",
    age: 16,
    gradient: "from-red-500 to-pink-500",
    iconColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
];

export default function TeamPreview() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">The Minds Behind LOTPUB</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A diverse team united by curiosity and the drive to push technological boundaries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div 
            key={member.name}
            className={`glow-card ${member.bgColor} border ${member.borderColor} rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]`}
          >
            {/* Color Bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${member.gradient} rounded-full mb-6`}></div>
            
            {/* Avatar & Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className={`font-semibold ${member.iconColor}`}>{member.role}</p>
              </div>
            </div>
            
            {/* Details */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Title</p>
                <p className="font-medium">{member.title}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400">Skills</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${member.bgColor} ${member.iconColor} border ${member.borderColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-400">Tech Stack</p>
                <p className="text-sm font-medium text-gray-300">{member.programming}</p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <span className="text-gray-400">Age: <span className="font-bold text-white">{member.age}</span></span>
                <div className="flex gap-3">
                  <button className={`p-2 rounded-lg ${member.bgColor} hover:opacity-80 transition-opacity`}>
                    <Github className="w-5 h-5" />
                  </button>
                  <button className={`p-2 rounded-lg ${member.bgColor} hover:opacity-80 transition-opacity`}>
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all"
        >
          Full Team Overview
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
 
    </section>
  );
}