"use client"

import AddOllyButton from "./_components/add-olly";
import { Heading } from "./_components/heading";
import Heroes  from "./_components/heroes";
import Pricing from "./_components/pricing";
import pricingFeatures from "./_components/pricing-features";

import { Button } from "@/components/ui/button";

const MarketingPage = () => {

  const handleButtonClick = () => {
    window.open("https://gumroad.com/l/olly", "_blank");
  };

  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-4 md:px-6 pb-10">
        <Heading />
        <h2 className="text-4xl font-bold mb-4 text-center my-8">Features</h2>
        <Heroes />
        <AddOllyButton />
        <Pricing features={pricingFeatures} />
      </div>
    </div>
  );
}

export default MarketingPage;

