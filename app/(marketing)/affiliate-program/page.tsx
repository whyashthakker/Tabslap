import { Suspense } from "react";
import { Metadata } from "next";

import { Testimonials } from "../_components/testimonials";
import { FeaturesAutomation, FeaturesUnsubscribe } from "../_components/features";
import { Pricing } from "../_components/pricing-2";
import FAQs from "../_components/faq-section";
import { CTA } from "../_components/cta";
import { HeadingAffiliate } from "../_components/heading-affiliate";

export const metadata: Metadata = {
  title: "Affiliate Program | Top Affiliate Programs for Creators | AI Chrome Extension | Olly.social",
  description:
    "Join Olly.social's affiliate program and earn money by promoting our AI Chrome Extension. Our affiliate program is designed for creators, influencers, and anyone with an audience. Sign up today and start earning commissions for every sale you refer.",
  alternates: { canonical: "/affiliate-program" },
};

export default function AIChromeExtension() {
  return (
    <>
      <HeadingAffiliate
        title="Affiliate Partner Program"
        subtitle="25% of every sale. $10 minimum payout. 30-day cookie duration. High conversion because one-time payment."
        image="/step_main.gif"
      />
      <Testimonials />
      <FeaturesUnsubscribe />
      <Suspense>
        <Pricing />
      </Suspense>
      <FAQs />
      <CTA />
    </>
  );
}
