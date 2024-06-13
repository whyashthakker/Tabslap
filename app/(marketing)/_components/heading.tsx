"use client";

import { Accessibility, ArrowBigDown, ArrowBigDownDash, ArrowRight, Brain, BrainCircuit, Heart } from "lucide-react";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import AddOllylapButton from "./add-olly";
import ProductHuntBadge from "./ph-embed";
import Image from "next/image";
import SupportedPlatforms from "./supported-platforms";
import BackgroundImage from "./background-image";
import { VideoDemo } from "./video-demo";
import {cn} from "@/utils";
import { CTAButtons } from "./cta-buttons";
import HeroHeadingAB from "./HeroHeadingAB";
import { CTAButtonsAB } from "./cta-ab";
import RefundOption from "./refund-option";
import { Tag } from "@/components/Tag";
import NewUpdates from "./new-updates";

export function HeroText(props: { children: React.ReactNode; className?: string; }) {
  const { className, ...rest } = props;
  return (
    <h1 className={cn("font-cal text-4xl sm:text-5xl lg:text-6xl text-gray-900", className)} {...rest} />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return <p className="mt-6 text-xs sm:text-s leading-8 text-gray-500" {...props} />;
}

export const Heading = (props: {
  title?: string;
  subtitle?: string;
  image?: string;
}) => {

  return (
    <div className="relative pt-10">
      <div className="pt-5 sm:pb-12 sm:pt-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-4">
        <div className="flex justify-center items-center space-x-4">
          <h3 className="hidden sm:block font-cal text-2xl text-gray-900">
          </h3>
          <ProductHuntBadge />
        </div>
        <div className="mt-4 flex justify-center">
          <NewUpdates />
        </div>
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
                  Not just another AI Tool? Tabslap is a flexible Chrome Extension that can Generate Comments, Posts, Replies & Summarise across all Social Media Platform, helping you become a brand faster.
                </>
              )}
            </HeroSubtitle>
            {/* <CTAButtons /> */}
            <CTAButtonsAB />
            <RefundOption />
          </div>
      {/* <p className="text-xs text-red-500">Tabslap is one time payment. We hate subscriptions. But you will get lifetime updates. Note: After January 31st the price will be $49.99.</p> */}

      <div className="mt-12 flow-root sm:mt-20">
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