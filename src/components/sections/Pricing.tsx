import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small institutions getting started with analytics",
      price: {
        monthly: 299,
        annual: 249
      },
      features: [
        "Up to 500 students",
        "Basic analytics dashboard",
        "Automated assessments",
        "Email support",
        "Data export",
        "2 admin users"
      ],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for growing institutions needing advanced features",
      price: {
        monthly: 599,
        annual: 499
      },
      features: [
        "Up to 2,000 students",
        "Advanced analytics & predictions",
        "Personalized learning paths",
        "Priority support",
        "API access",
        "10 admin users",
        "Custom integrations",
        "Training sessions"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large educational institutions",
      price: {
        monthly: 1299,
        annual: 999
      },
      features: [
        "Unlimited students",
        "Custom analytics models",
        "White-label option",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited admin users",
        "Custom development",
        "Onsite training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your institution
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-indigo-600"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual billing
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.highlight
                  ? 'bg-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-sm'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className={`mt-2 ${plan.highlight ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className={`ml-2 ${plan.highlight ? 'text-indigo-100' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p className={`mt-1 text-sm ${plan.highlight ? 'text-indigo-100' : 'text-gray-500'}`}>
                      Billed annually
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className={`h-5 w-5 ${plan.highlight ? 'text-indigo-200' : 'text-indigo-600'} mr-3`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-center font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Have questions about pricing? 
            <button className="ml-2 text-indigo-600 font-semibold inline-flex items-center">
              Check our FAQ
              <HelpCircle className="ml-1 h-4 w-4" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;