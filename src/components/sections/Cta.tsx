import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

const CTASection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-slate-900 py-20" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Transform Your Emergency Response?
            </h2>
            <div className="space-y-4">
              {[
                'Reduce response times by up to 45%',
                'Coordinate multiple agencies seamlessly',
                'Real-time situation awareness',
                'Advanced analytics and reporting',
                'Dedicated 24/7 support team'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-blue-500/20 rounded-full p-1">
                    <Check className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Schedule a Demo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(formState).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                      value={formState[field as keyof FormState]}
                      onChange={(e) =>
                        setFormState({ ...formState, [field]: e.target.value })
                      }
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formState[field as keyof FormState]}
                      onChange={(e) =>
                        setFormState({ ...formState, [field]: e.target.value })
                      }
                      required
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
