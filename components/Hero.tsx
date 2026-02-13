import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Founded by Young Innovators</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Love Of</span>{" "}
          <span className="gradient-text">Technology</span>
          <br />
          <span className="text-white">Push Us</span>{" "}
          <span className="relative">
            <span className="text-white">Beyond</span>
            <ArrowRight className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 text-blue-400 animate-pulse" />
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          We create interactive websites, inspiring apps, and immersive games. 
          Driven by curiosity, we explore science and technology to build a better 
          future for the next generation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105">
            View Our Work
            <Code2 className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold text-lg transition-all">
            Meet The Team
          </button>
        </div>
        
        {/* Tech Stack Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "Node.js", "Godot", "Blender", "Tailwind CSS"].map((tech) => (
            <div key={tech} className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}