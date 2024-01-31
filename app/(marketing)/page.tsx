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

const MarketingPage = () => {
  return (
<div className="min-h-full flex flex-col bg-no-repeat bg-[url('/sm_website_bg.jpg')] lg:bg-[url('/lg_website_bg.jpg')] md:bg-[url('/md_website_bg.jpg')] xl:bg-[url('/xl_website_bg.png')]">
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
        <CTAButtons />
        {/* <AddOllyButton /> */}
        <Suspense>
          <Pricing />
        </Suspense>
        <FAQSection />
        <CTA />
        <CTAButtons />  
        {/* <PreFooter /> */}
      {/* </div> */}
    </div>
  );
}

export default MarketingPage;

