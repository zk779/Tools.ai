import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: ["5 conversions/day", "Basic file formats", "Email support"],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      features: ["Unlimited conversions", "All file formats", "Priority support", "AI tools access"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom solutions", "API access", "Dedicated account manager"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Choose Plan</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

