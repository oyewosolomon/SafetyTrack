import React from 'react';
import { Bell, Radio, Map, Clock, Shield, Users, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Real-time emergency notifications with intelligent routing based on incident type and severity."
    },
    {
      icon: Radio,
      title: "Multi-Agency Coordination",
      description: "Seamless communication between police, fire, medical, and other emergency services."
    },
    {
      icon: Map,
      title: "Dynamic Mapping",
      description: "Real-time visualization of resources, incidents, and response units with predictive routing."
    },
    {
      icon: Clock,
      title: "Response Analytics",
      description: "Advanced metrics and insights to continuously improve emergency response times."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Military-grade encryption and compliance with all major security standards."
    },
    {
      icon: Users,
      title: "Resource Management",
      description: "Smart allocation of emergency resources based on historical data and real-time demands."
    }
  ];

  return (
    <div className="bg-slate-50 py-20" id='features'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Powerful Features for Faster Response
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Everything you need to coordinate emergency responses effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
