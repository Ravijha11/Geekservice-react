import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Cloud, 
  Settings,
  Monitor,
  Code2
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design.",
      features: ["React & Next.js", "E-commerce Solutions", "CMS Development", "API Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database design, optimization, and management services.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Database Migration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and management solutions.",
      features: ["AWS/Azure Setup", "Cloud Migration", "DevOps", "Serverless"]
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your business processes.",
      features: ["Digital Strategy", "Process Automation", "Tech Stack Planning", "Training"]
    },
    {
      icon: Monitor,
      title: "System Administration",
      description: "Complete system management and maintenance for optimal performance.",
      features: ["Server Management", "Network Setup", "Backup Solutions", "Monitoring"]
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs.",
      features: ["Enterprise Software", "API Development", "Integration", "Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-cyan-500 group-hover:text-cyan-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-500 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;