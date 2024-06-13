import { Suspense } from "react";
import { Metadata } from "next";

import { Heading } from "../_components/heading";
import { Testimonials } from "../_components/testimonials";
import { FeaturesAutomation, FeaturesUnsubscribe } from "../_components/features";
import { Pricing } from "../_components/pricing-2";
import FAQs from "../_components/faq-section";
import { CTA } from "../_components/cta";

export const metadata: Metadata = {
  title: "Supported Platforms | Tabslap.social",
  description:
    "This is the list of supported platforms on our AI Comment Generator Tabslap: LinkedIn, BlueSky, Twitter, X, Product Hunt, Facebook, Instagram, Reddit, Hacker News, Quora, Medium and more. Tabslap is your AI-Powered Social Media Assistant to Generate Comments, Posts, Viral Scores for Your social media posts. Try Tabslap's AI Comment Generator for free. Answer things like: What is Bluesky? How to use Bluesky? Bluesky AI and so on.",
  alternates: { canonical: "/supported-platforms" },
};

export default function SupportedPlatforms() {
  return (
    <>
      <Heading
        title="Supported Platforms"
        subtitle="Tabslap supports LinkedIn, BlueSky, Twitter, X, Product Hunt, Facebook, Instagram, Reddit, Hacker News, Quora, Medium and more."
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
