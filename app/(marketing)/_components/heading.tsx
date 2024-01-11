"use client";

import { Accessibility, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import AddOllyButton from "./add-olly";
import ProductHuntBadge from "./ph-embed";
import Image from "next/image";

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
            {/* <Heart className="h-4 w-4 ml-2" /> */}
            Get Lifetime Access at&nbsp;
            <span className="line-through text-gray-800 text-l justify-bottom">$49.99</span>
            <span className="text-white-600 text-l">&nbsp;$19.99</span>
        </Button>
      </div>
      <p className="text-xs text-red-500">Lifetime offer is valid until 12th January, 2024 11:59:59 PM PST.</p>
      <Button variant="ghost" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleWatchDemo}>
        Watch Demo
      </Button>
      <Image src="/step_main.gif" width={800} height={800} alt="AI Powered Comment Generator tool online" />
    </div>
  )
}