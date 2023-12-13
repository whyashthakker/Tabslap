import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  features: string[]; // List of features to be displayed
}

const Pricing: React.FC<PricingProps> = ({ features }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-center my-8">Pricing</h2>
      <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg shadow-red-500/50 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Lifetime Access</h2>
        <p className="text-lg mb-4">
          <span className="line-through text-gray-500">$29.99</span> <span className="text-red-600">$9.99</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">Limited Time Deal</p>
        <Button variant="premium" className="mb-5">
          Buy Now <ArrowRight className="ml-2" size={20} />
        </Button>
        <div className="text-left w-full">
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-red-600 mr-2" size={20} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pricing;
