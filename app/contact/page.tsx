'use client';

import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:lotpub.tech@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "lotpub.tech@gmail.com",
      link: "mailto:lotpub.tech@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Call/SMS",
      details: "+234 902 2829 616",
      link: "tel:+2341234567890",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nigeria",
      color: "red"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      color: "purple"
    },
  ];

  const teamContacts = [
    {
      name: "Mubarak",
      role: "CEO & Lead Developer",
      email: "mubbyomosanya@gmail.com",
      color: "blue"
    },
    {
      name: "Abdullah", 
      role: "Co-CEO & Developer",
      email: "abdullahdev268@gmail.com",
      color: "green"
    },
    {
      name: "Ameer",
      role: "Operations Manager",
      email: "nurudeenameer8@gmail.com", 
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
        <div className="container relative mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Have a project in mind? Want to collaborate? We&apos;d love to hear from you.
            Let&apos;s build something amazing together.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">We respond within 24 hours</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link || '#'}
              className={`glow-card p-6 rounded-2xl border ${
                info.color === 'blue' ? 'border-blue-500/30 bg-blue-500/5' :
                info.color === 'green' ? 'border-green-500/30 bg-green-500/5' :
                info.color === 'red' ? 'border-red-500/30 bg-red-500/5' :
                'border-purple-500/30 bg-purple-500/5'
              } hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                info.color === 'blue' ? 'bg-blue-500/10' :
                info.color === 'green' ? 'bg-green-500/10' :
                info.color === 'red' ? 'bg-red-500/10' :
                'bg-purple-500/10'
              }`}>
                <info.icon className={`w-6 h-6 ${
                  info.color === 'blue' ? 'text-blue-400' :
                  info.color === 'green' ? 'text-green-400' :
                  info.color === 'red' ? 'text-red-400' :
                  'text-purple-400'
                }`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-300">{info.details}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-[1.02]"
              >
                Send Message via Email
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Clicking &quot;Send Message&quot; will open your email client with a pre-filled message.
              </p>
            </form>
          </div>

          {/* Team Contacts & Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Direct Team Contacts</h2>
              <div className="space-y-4">
                {teamContacts.map((member) => (
                  <div
                    key={member.name}
                    className={`p-4 rounded-xl border ${
                      member.color === 'blue' ? 'border-blue-500/30 bg-blue-500/5' :
                      member.color === 'green' ? 'border-green-500/30 bg-green-500/5' :
                      'border-red-500/30 bg-red-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-400 text-sm">{member.role}</p>
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className={`px-4 py-2 rounded-lg ${
                          member.color === 'blue' ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' :
                          member.color === 'green' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' :
                          'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        } transition-colors`}
                      >
                        Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose LOTPUB?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span>Young, innovative team with fresh perspectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span>Full-stack development expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">✓</span>
                  </div>
                  <span>Competitive pricing for startups and businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">✓</span>
                  </div>
                  <span>Passionate about solving real-world problems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-4">
                We&apos;re excited to hear about your ideas and help bring them to life.
              </p>
              <a
                href="mailto:lotpub.tech@gmail.com?subject=Project%20Inquiry%20-%20LOTPUB&body=Hello%20LOTPUB%20team,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Details:%0A%0ABudget%20Range:%0ATimeline:%0A%0ALooking%20forward%20to%20your%20response!"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Start Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}