"use client";

import { Accessibility, ArrowBigDown, ArrowBigDownDash, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import ProductHuntBadge from "./ph-embed";
import Image from "next/image";
import SupportedPlatforms from "./supported-platforms";
import BackgroundImage from "./background-image";
import { VideoDemo } from "./video-demo";
import {cn} from "@/utils";
import { CTAButtons } from "./cta-buttons";
import HeroHeadingAB from "./HeroHeadingAB";
import { CTAButtonsAffiliate } from "./cta-affiliates";

export function HeroText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { className, ...rest } = props;

  return (
    <h1
      className={cn("font-cal text-4xl text-gray-900 sm:text-6xl", className)}
      {...rest}
    />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return <p className="mt-6 text-lg leading-8 text-gray-600" {...props} />;
}


export const HeadingAffiliate = (props: {
  title?: string;
  subtitle?: string;
  image?: string;
}) => {

  const handleButtonClick = () => {
    window.open("https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", "_blank")
  }

  return (
    <div className="relative pt-14">
      <div className="pt-5 sm:pb-12 sm:pt-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <HeroTag /> */}
          <div className="mb-10">
            <ProductHuntBadge />
          </div>

        <div className="mx-auto max-w-xl text-center">
            {/* <HeroText>{props.title || <HeroHeadingAB />}</HeroText> */}
            <HeroText>
              {props.title || <HeroHeadingAB />}
              {/* <BrainCircuit size={45} className="inline-block" /> */}
            </HeroText>
            <HeroSubtitle>
              {props.subtitle || (
                <>
                  Generate AI Powered Comments, Suggestions, Replies, & Real-time Virality Scores for your Posts, directly on your Social Media Pages.
                </>
              )}
            </HeroSubtitle>
            <CTAButtonsAffiliate />
          </div>
      {/* <p className="text-xs text-red-500">Tabslap is one time payment. We hate subscriptions. But you will get lifetime updates. Note: After January 31st the price will be $49.99.</p> */}

      <div className="mt-16 flow-root sm:mt-24">
            <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={props.image || "/step_main.gif"}
                alt="Tabslap Social Alternatives"
                width={2432}
                height={1442}
                className="rounded-md shadow ring-1 ring-gray-900/10"
              />

              <VideoDemo />
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}