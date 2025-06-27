'use client';

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect to test the platform and start creating content.",
    features: [
      "Basic AI content generator",
      "Limited scheduling",
      "1 social account",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "Best for creators and small businesses.",
    features: [
      "Advanced AI content",
      "Unlimited scheduling",
      "5 social accounts",
      "Analytics dashboard",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Custom solutions for teams and agencies.",
    features: [
      "Dedicated AI models",
      "Unlimited accounts",
      "Priority support",
      "Custom analytics",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple Pricing</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose a plan that fits your needs. Cancel anytime.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.featured
                  ? "bg-white border-2 border-indigo-600 scale-105"
                  : "bg-gray-100 border border-gray-200"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-indigo-600 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="text-left text-gray-700 mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
