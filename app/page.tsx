import Hero from "@/components/Hero";
import TeamPreview from "@/components/TeamPreview";
import ServicesSection from "@/components/ServicesSection";
import { Sparkles, Rocket, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Mission Statement */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Our Mission</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Satisfy Our <span className="gradient-text">Curiosity</span> & Be The{" "}
            <span className="relative">
              <span className="text-white">Best</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We are a passionate team of young innovators building the future through 
            technology. From interactive websites to immersive games, we turn curiosity 
            into creation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Push Beyond</h3>
              <p className="text-gray-400">Exploring cutting-edge technology to solve tomorrow&apos;s problems</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best of the Best</h3>
              <p className="text-gray-400">Setting the highest standards in every project we undertake</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Generation</h3>
              <p className="text-gray-400">Building tools and experiences that make life better for everyone</p>
            </div>
          </div>
        </div>
      </section>

      <TeamPreview />
      <ServicesSection />
    </>
  );
}