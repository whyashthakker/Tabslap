"use client";

import { Accessibility, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import AddOllyButton from "./add-olly";
import Link from "next/link";
import Image from "next/image";
import ProductHuntBadge from "./ph-embed";
import SupportedPlatforms from "./supported-platforms";

export const Heading = () => {

  const handleWatchDemo = () => {
    window.open("https://youtu.be/I5jyvy5S5T4", "_blank")
  }

  const handleButtonClick = () => {
    window.open("https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", "_blank")
  }


  return (

    
    <div className="max-w-3xl space-y-4">
      <ProductHuntBadge />
      <h1 className="text-3xl sm:text-5xl m-2 md:text-6xl font-bold md:mb-10">
        Your AI-Powered Second Brain <BrainCircuit size={45} className="inline-block" />
      </h1>
      <h3 className="text-s md:text-m font-small mb-4 text-gray-500">
        In-Browser AI Generated Comments, Replies, Virality Scores & similar Posts across LinkedIn, Product Hunt, YouTube, Reddit, Facebook, Instagram, X and more in seconds.
      </h3>
      {/* <SupportedPlatforms /> */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <AddOllyButton />
        <Button variant="premium" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleButtonClick}>
            Get Lifetime Access
            <Heart className="h-4 w-4 ml-2" />
        </Button>
      </div>
      <Button variant="ghost" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleWatchDemo}>
        Watch Demo
      </Button>
    </div>
  )
}