"use client";

import { Accessibility, ArrowBigDown, ArrowBigDownDash, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import AddOllyButton from "./add-olly";
import ProductHuntBadge from "./ph-embed";
import Image from "next/image";
import SupportedPlatforms from "./supported-platforms";
import BackgroundImage from "./background-image";

export const Heading = () => {

  const handleButtonClick = () => {
    window.open("https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", "_blank")
  }

  return (
    <div className="relative max-w-3xl min-h-screen space-y-4 mb-4">
      {/* <BackgroundImage /> */}
      <ProductHuntBadge />
      <h1 className="text-3xl sm:text-5xl m-2 md:text-6xl font-bold md:mb-5">
        Your AI-Powered Second Brain <BrainCircuit size={45} className="inline-block" />
      </h1>
      <h3 className="text-xs md:text-m font-small mb-2 text-gray-500">
        In-Browser AI Generated Comments, Replies, Virality Scores & similar Posts in seconds. Works on LinkedIn, Facebook, Instagram, YouTube, Product Hunt, Hacker News, Quora and more! 
        {/* <Link href={"https://youtu.be/wpYeDmWoXH8"} target="_blank" className="text-blue-800"> Watch Demo </Link> */}

      </h3>
      {/* <div className="flex justify-center">
        <ArrowBigDown className="h-10 w-5 animate-bounce" />
      </div> */}
      {/* <div className="flex flex-row justify-center items-center"> */}
      {/* <SupportedPlatforms /> */}
      {/* </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <AddOllyButton />
        <Button variant="premium" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleButtonClick}>
            {/* <Heart className="h-4 w-4 ml-2" /> */}
            Get Lifetime Access at&nbsp;
            <span className="line-through text-gray-800 text-l justify-bottom">$49.99</span>
            <span className="text-white-600 text-l">&nbsp;$29.99</span>
        </Button>
      </div>
      <p className="text-xs text-red-500">Olly is one time payment. We hate subscriptions. But you will get lifetime updates. Note: After January 31st the price will be $49.99.</p>
      <div className="flex justify-center">
      <div className="shadow-lg shadow-teal-500/50">
        <Image src="/step_main.gif" width={800} height={800} alt="AI Powered Comment Generator tool online" />
      </div>
      </div>
    </div>
  )
}