export default function Pricing() {
  
    return (
      <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: 'Basic', features: ['Feature one', 'Feature two', 'Feature three'] },
                    { name: 'Standard', features: ['Feature one', 'Feature two', 'Feature three'] },
                    { name: 'Premium', features: ['Feature one', 'Feature two', 'Feature three'] }
                  ].map((plan, index) => (
                    <div key={index} className="bg-black border border-yellow-800 rounded-xl px-6 xl:px-24 py-6 lg:flex lg:justify-center lg:flex-col lg:items-center">
                      <h3 className="text-3xl font-bold text-yellow-500 mb-6">{plan.name}</h3>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="bg-gradient-to-r  from-yellow-600 via-yellow-300 to-yellow-600 text-black py-3 w-36 rounded-xl font-semibold hover:shadow-lg transition-shadow">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
    
    );
  }