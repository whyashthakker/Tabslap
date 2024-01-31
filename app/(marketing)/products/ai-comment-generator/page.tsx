import { Suspense } from "react";
import { Metadata } from "next";
// import { LogoCloud } from "@/app/(landing)/home/LogoCloud";

import { Heading } from "../../_components/heading";
import { Testimonials } from "../../_components/testimonials";
import { FeaturesAutomation } from "../../_components/features";
import { Pricing } from "../../_components/pricing-2";
import FAQs from "../../_components/faq-section";
import { CTA } from "../../_components/cta";

export const metadata: Metadata = {
  title: "AI Comment Generator | Olly.social",
  description:
    "Olly's AI comment generator helps you generate comments for your social media posts. It's a great tool for social media managers, influencers, and content creators. It's easy to use and supported across all major social media platforms like LinkedIn, Twitter, Reddit, and Facebook. With Olly, you get personalized interactions, time-saving commenting, and insights into what makes content viral. It's designed to grow your following by strategically enhancing engagement and providing content ideas that resonate with your audience.",
  alternates: { canonical: "/ai-comment-generator" },
};

export default function AICommentGenerator() {
  return (
    <>
      <Heading
        title="AI Comment Generator"
        subtitle="Olly's AI comment generator helps you generate comments for your social media posts. It's a great tool for social media managers, influencers, and content creators."
        image="/step_main.gif"
      />
      {/* <LogoCloud /> */}
      <Testimonials />
      <FeaturesAutomation />
      <Suspense>
        <Pricing />
      </Suspense>
      <FAQs />
      <CTA />
    </>
  );
}
