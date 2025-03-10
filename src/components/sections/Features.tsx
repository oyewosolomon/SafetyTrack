import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Radio, Map, Clock, Shield, Users, LucideIcon } from 'lucide-react';

// Define the type for the props of BenefitCard
interface BenefitCardProps {
  title: string;
  description: string;
  color: keyof typeof colorClasses; // Restrict color to the keys of colorClasses
}

// Define the color classes object
const colorClasses = {
  pink: 'bg-pink-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  blue: 'bg-blue-100',
  yellow: 'bg-yellow-100',
  teal: 'bg-teal-100'
};

// Animation variants for BenefitCard and FeatureCard
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, color }) => {
  const benefitPoints = [
    'Boost Online Visibility',
    'Amplify Brand\'s Reach',
    'Grow Your Audience',
    'Create and Captivate'
  ];

  return (
    <motion.div
      className={`${colorClasses[color]} rounded-lg p-6`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-6 text-gray-700">{description}</p>
      
      <ul className="mb-6">
        {benefitPoints.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-start mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-black mr-2">•</span>
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.button
        className="bg-black text-white px-6 py-2 rounded-md font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

// Define the type for the benefit object
interface Benefit {
  title: string;
  description: string;
  color: keyof typeof colorClasses;
}

// Define the type for the feature object
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: keyof typeof colorClasses; // Add color to match BenefitCard
}

// FeatureCard component using the same template as BenefitCard
const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description, color }) => (
  <motion.div
    className={`${colorClasses[color]} rounded-lg p-6`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="mb-6 text-gray-700">{description}</p>
    
    <motion.button
      className="bg-black text-white px-6 py-2 rounded-md font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const Features: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: 'Fast Transaction',
      description: 'We prioritize our customer experience, ensuring that every interaction with our platform is seamless and intuitive.',
      color: 'pink'
    },
    {
      title: 'Safe Transaction',
      description: 'Safe Transaction ensures secure and reliable financial exchanges, protecting your sensitive information.',
      color: 'green'
    },
    {
      title: 'Time Saving',
      description: 'Save valuable time with our efficient solutions designed to streamline your tasks and processes.',
      color: 'purple'
    },
    {
      title: 'Global Service',
      description: 'Global Service offers comprehensive and reliable solutions to meet your needs, no matter where you are.',
      color: 'blue'
    },
    {
      title: 'Add Payment Method',
      description: 'Our secure platform supports multiple payment options, allowing you to choose.',
      color: 'yellow'
    },
    {
      title: 'Various Categories',
      description: 'Our platform offers an extensive selection, making it easy to find exactly what you\'re looking for.',
      color: 'teal'
    }
  ];

  const features: Feature[] = [
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Real-time emergency notifications with intelligent routing based on incident type and severity.",
      color: 'pink'
    },
    {
      icon: Radio,
      title: "Multi-Agency Coordination",
      description: "Seamless communication between police, fire, medical, and other emergency services.",
      color: 'green'
    },
    {
      icon: Map,
      title: "Dynamic Mapping",
      description: "Real-time visualization of resources, incidents, and response units with predictive routing.",
      color: 'purple'
    },
    {
      icon: Clock,
      title: "Response Analytics",
      description: "Advanced metrics and insights to continuously improve emergency response times.",
      color: 'blue'
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Military-grade encryption and compliance with all major security standards.",
      color: 'yellow'
    },
    {
      icon: Users,
      title: "Resource Management",
      description: "Smart allocation of emergency resources based on historical data and real-time demands.",
      color: 'teal'
    }
  ];

  return (
    <div>
 
      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Powerful Features for Faster Response</h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Everything you need to coordinate emergency responses effectively
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;