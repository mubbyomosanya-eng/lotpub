'use client';

import { Award, Users, Target, Clock } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "3", label: "Team Members", color: "blue" },
    { icon: Award, value: "100%", label: "Satisfaction", color: "green" },
    { icon: Target, value: "10+", label: "Skills", color: "red" },
    { icon: Clock, value: "24/7", label: "Dedication", color: "purple" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">LOTPUB</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Love Of Technology Push Us Beyond. We&apos;re a passionate team of young 
              innovators dedicated to building the future through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-2xl">
              <div className={`w-12 h-12 rounded-lg mb-4 mx-auto flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'red' ? 'bg-red-500/10' :
                'bg-purple-500/10'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'blue' ? 'text-blue-400' :
                  stat.color === 'green' ? 'text-green-400' :
                  stat.color === 'red' ? 'text-red-400' :
                  'text-purple-400'
                }`} />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded by three friends united by their love for technology, LOTPUB began 
                  as a passion project in 2026. What started as casual coding sessions quickly 
                  evolved into a mission to create meaningful digital experiences.
                </p>
                <p>
                  We believe that age is just a number when it comes to innovation. Our 
                  youthful perspective allows us to approach problems with fresh eyes and 
                  create solutions that are both innovative and practical.
                </p>
                <p>
                  Every project we undertake is driven by our motto: &quot;Satisfy Our 
                  Curiosity and Be The Best of the Best.&quot; This commitment to excellence 
                  and continuous learning defines everything we do.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To harness the power of technology to solve real-world problems, 
                inspire innovation, and build a better future for the next generation.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become a leading force in technology innovation, known for 
                transforming curiosity into groundbreaking digital solutions that 
                make life easier and better for everyone.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Curiosity Driven",
                  description: "We never stop asking questions and exploring new possibilities in technology.",
                  color: "blue"
                },
                {
                  title: "Excellence Focused", 
                  description: "We strive for perfection in every line of code and every design decision.",
                  color: "green"
                },
                {
                  title: "Future Oriented",
                  description: "We build solutions that not only work today but will thrive tomorrow.",
                  color: "red"
                }
              ].map((value) => (
                <div 
                  key={value.title}
                  className={`p-6 rounded-2xl border ${
                    value.color === 'blue' ? 'border-blue-500/30 bg-blue-500/5' :
                    value.color === 'green' ? 'border-green-500/30 bg-green-500/5' :
                    'border-red-500/30 bg-red-500/5'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}