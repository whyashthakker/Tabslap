"use client";
import React from "react";
import howToUseData from "./how-to-use";
import HowToUse from "./how-to-use-component";
import AddOllyButton from "./add-olly";
import { Button } from "@/components/ui/button";
import WatchDemo from "./watch-demo";
import { ActivationDemo } from "./activation-demo";
import Image from "next/image";

const ActivationGuide: React.FC = () => {
  const handleButtonClick = () => {
    window.open(
      "https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca",
      "_blank"
    );
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-4xl font-semibold text-center my-4">How to use</h1>
        <p className="text-gray-500 text-center">
          The following guide will help you to get started with the Olly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mb-4">
        <AddOllyButton />
        <Button
          variant="premium"
          size="lg"
          className="mt-2 md:mt-0 md:ml-2"
          onClick={handleButtonClick}
        >
          Activate Olly
        </Button>
      </div>
      <div className="mt-12 sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4"> */}
            <div className="relative mx-auto max-w-4xl">
              <Image
                src={"/how-to-use.jpg"}
                alt="Activation Guide Demo"
                width={2432}
                height={1442}
                className="rounded-md shadow ring-1 ring-gray-900/10 w-full h-auto"
              />
              <ActivationDemo />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {howToUseData.map((feature, index) => (
          <HowToUse key={index} {...feature} />
        ))}
      </div>
      <p className="text-center text-gray-800 m-3">
        If you have any questions, please reach out to us at yash@explainx.ai.
      </p>
    </div>
  );
};

export default ActivationGuide;