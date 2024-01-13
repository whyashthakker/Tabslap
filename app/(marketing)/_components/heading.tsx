"use client";

import { Accessibility, ArrowBigDown, ArrowBigDownDash, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import AddOllyButton from "./add-olly";
import ProductHuntBadge from "./ph-embed";
import Image from "next/image";
import SupportedPlatforms from "./supported-platforms";

export const Heading = () => {

  const handleWatchDemo = () => {
    window.open("https://youtu.be/I5jyvy5S5T4", "_blank")
  }

  const handleButtonClick = () => {
    window.open("https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", "_blank")
  }

  return (
    <div className="max-w-3xl space-y-4 mb-4">
      <ProductHuntBadge />
      <h1 className="text-3xl sm:text-5xl m-2 md:text-6xl font-bold md:mb-5">
        Your AI-Powered Second Brain <BrainCircuit size={45} className="inline-block" />
      </h1>
      <h3 className="text-xs md:text-m font-small mb-2 text-gray-500">
        In-Browser AI Generated Comments, Replies, Virality Scores & similar Posts in seconds across all major social media platforms.
      </h3>
      {/* <div className="flex justify-center">
        <ArrowBigDown className="h-10 w-5 animate-bounce" />
      </div> */}
      <SupportedPlatforms />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <AddOllyButton />
        <Button variant="premium" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleButtonClick}>
            {/* <Heart className="h-4 w-4 ml-2" /> */}
            Get Lifetime Access at&nbsp;
            <span className="line-through text-gray-800 text-l justify-bottom">$49.99</span>
            <span className="text-white-600 text-l">&nbsp;$19.99</span>
        </Button>
      </div>
      <p className="text-xs text-red-500">Olly is one time payment. We hate subscriptions. Lifetime offer is valid until 14th January, 2024 11:59:59 PM PST. After this the price will be $29.99 and after Jan 31st will be $49.99.</p>
      <Button variant="ghost" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleWatchDemo}>
        Watch Demo
      </Button>
      <div className="flex justify-center">
      <div className="shadow-lg shadow-teal-500/50">
        <Image src="/step_main.gif" width={800} height={800} alt="AI Powered Comment Generator tool online" />
      </div>
      </div>
    </div>
  )
}