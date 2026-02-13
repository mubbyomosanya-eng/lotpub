'use client';

import { ExternalLink, Github, Globe, Calendar } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "[School Name] Website",
      description: "A modern, responsive website for our school with admin dashboard, event calendar, and contact system.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      status: "Completed & Paid",
      date: "2024",
      demoLink: "#",  // Add actual school website URL
      codeLink: "#",  // If code is private, remove this
      color: "blue",
      featured: true
    },
    // Add more projects here as you complete them
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Projects</span></h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Showcasing our journey from concept to creation. Each project represents our commitment to excellence and innovation.
        </p>

        {/* School Project - Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 rounded-3xl p-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 mb-6">
              <span className="text-sm font-semibold">FEATURED PROJECT</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">School Management Website</h2>
            <p className="text-gray-300 mb-6">
              Our first commercial project! A complete website solution for our school featuring:
              • Responsive design for all devices
              • Admin dashboard for content management
              • Event calendar and notification system
              • Contact forms with email integration
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {["Next.js", "React", "Tailwind CSS", "Node.js", "EmailJS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#" // Add actual URL
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <Globe className="w-5 h-5" />
                Live Demo
              </a>
              <div className="px-6 py-3 bg-green-600/20 text-green-400 rounded-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
              Still in progress
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Project Highlights</h3>
            <ul className="space-y-4">
              {[
                "Mobile-first responsive design",
                "Optimized for fast loading speeds",
                "Secure contact forms with spam protection",
                "Easy-to-use admin interface",
                "Cross-browser compatibility"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Educational Game",
                description: "Interactive learning game for students",
                status: "In Development",
                color: "green"
              },
              {
                title: "E-commerce Platform",
                description: "Modern online store with payment integration",
                status: "Planning",
                color: "purple"
              },
              {
                title: "Mobile App",
                description: "Productivity app for students",
                status: "Idea Stage",
                color: "red"
              }
            ].map((project) => (
              <div 
                key={project.title}
                className={`p-6 rounded-2xl border ${
                  project.color === 'green' ? 'border-green-500/30 bg-green-500/5' :
                  project.color === 'purple' ? 'border-purple-500/30 bg-purple-500/5' :
                  'border-red-500/30 bg-red-500/5'
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  project.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  project.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}