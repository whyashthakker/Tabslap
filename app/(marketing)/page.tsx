"use client"

import { Suspense } from "react";
import AddOllyButton from "./_components/add-olly";
import BackgroundImage from "./_components/background-image";
import { CTA } from "./_components/cta";
import { CTAButtons } from "./_components/cta-buttons";
import FAQSection from "./_components/faq-section";
import {
  Features,
  FeaturesAutomation,
  FeaturesStats,
  FeaturesUnsubscribe,
} from "./_components/features";
import { Heading } from "./_components/heading";
import Heroes  from "./_components/heroes";
import { PreFooter } from "./_components/pre-footer";
import { Pricing } from "./_components/pricing-2";
import pricingFeatures from "./_components/pricing-features";
import SocialProof from "./_components/social-proof";
import { Testimonials } from "./_components/testimonials";

import UserReviews from "./_components/user-reviews";
import { CTAButtonsAB } from "./_components/cta-ab";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tabslap Social - Your Social Media Sidekick",
//   description: "Generate multi-lingual comments, summarise posts, generate posts, reply to comments, see virality scores, and lot more with tabslap ai, it works across Instagram, LinkedIn, twitter, reddit, hackernews, youtube, facebook, tiktok, product hunt and more.",
//   alternates: {
//     canonical: "/",
//   },
//   keywords: "tabslap, tabslap ai, ai comment generator, ai comment maker, ai comment creator, ai comments generator, ai reply generator, ai comment image generator, ai comment generator with profile picture, ai comment generator online, ai comment generator app, ai comment generator download, ai comment generator free, ai comment generator no watermark, ai comment generator without watermark, ai comment generator without logo, ai comment generator without watermark free, ai comment generator without watermark online, ai comment generator without watermark app, ai comment generator without watermark download, ai comment generator without watermark free online, ai comment generator without watermark free download, ai comment generator without watermark free app, ai comment generator without watermark free download, reddit summariser, reddit summarizer, reddit summary, reddit summarization, reddit summarization tool, reddit summarization app, reddit summarization software, reddit summarization tool online, reddit summarization tool free, reddit summarization tool without watermark, reddit summarization tool without logo, reddit summarization tool without watermark free, reddit summarization tool without watermark online, reddit summarization tool free online, reddit summarization tool free download, post summarizer, tiktok comment generator",
// };


const MarketingPage = () => {
  return (
<div className="min-h-full flex flex-col">
      {/* <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-1 flex-1 px-4 md:px-6 pb-10"> */}
        <Heading />
        {/* <SocialProof /> */}
        {/* <UserReviews /> */}
        <Testimonials />
        {/* <Heroes /> */}
        <Features />
        <FeaturesUnsubscribe />
        <FeaturesStats />
        <FeaturesAutomation />
        <CTAButtonsAB />
        <Suspense>
          <Pricing />
        </Suspense>
        <FAQSection />
        <CTA />
        <CTAButtonsAB />  
        {/* <PreFooter /> */}
      {/* </div> */}
    </div>
  );
}

export default MarketingPage;

