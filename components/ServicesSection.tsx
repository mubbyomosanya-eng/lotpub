import { Globe, Smartphone, Gamepad2, Rocket } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Interactive Websites",
      description: "Modern, responsive websites that engage users and deliver results.",
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform apps that provide seamless user experiences.",
      color: "green"
    },
    {
      icon: Gamepad2,
      title: "Immersive Games",
      description: "2D and 3D games built with Godot and cutting-edge technology.",
      color: "purple"
    },
    {
      icon: Rocket,
      title: "Tech Solutions",
      description: "Custom software to solve unique business challenges.",
      color: "red"
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What We Build</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We turn ideas into reality through innovative technology solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
              service.color === 'blue' ? 'bg-blue-500/10' : 
              service.color === 'green' ? 'bg-green-500/10' :
              service.color === 'purple' ? 'bg-purple-500/10' : 'bg-red-500/10'
            }`}>
              <service.icon className={`w-6 h-6 ${
                service.color === 'blue' ? 'text-blue-400' : 
                service.color === 'green' ? 'text-green-400' :
                service.color === 'purple' ? 'text-purple-400' : 'text-red-400'
              }`} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}