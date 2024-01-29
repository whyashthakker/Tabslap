"use client"

import AddOllyButton from "./_components/add-olly";
import BackgroundImage from "./_components/background-image";
import FAQSection from "./_components/faq-section";
import { Heading } from "./_components/heading";
import Heroes  from "./_components/heroes";
import Pricing from "./_components/pricing";
import pricingFeatures from "./_components/pricing-features";
import SocialProof from "./_components/social-proof";

import UserReviews from "./_components/user-reviews";

const MarketingPage = () => {
  return (
<div className="min-h-full flex flex-col bg-no-repeat bg-[url('/sm_website_bg.jpg')] lg:bg-[url('/lg_website_bg.jpg')] md:bg-[url('/md_website_bg.jpg')] ">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-1 flex-1 px-4 md:px-6 pb-10">
        <Heading />
        {/* <SocialProof /> */}
        <UserReviews />
        <Heroes />
        <AddOllyButton />
        <Pricing features={pricingFeatures} />
        <FAQSection />
      </div>
    </div>
  );
}

export default MarketingPage;

