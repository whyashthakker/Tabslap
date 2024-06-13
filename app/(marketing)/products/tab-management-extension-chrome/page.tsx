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
  title: "Tab Management Extension for Chrome - TabSlap",
  description:
    "TabSlap is a powerful Chrome tab productivity extension designed to help users stay focused on their tasks by monitoring their open tabs and providing timely reminders. With its intuitive design and robust functionality, TabSlap is your go-to tool for enhancing productivity and maintaining focus.",
  alternates: { canonical: "/tab-management-extension-chrome" },
};

export default function AIAgent() {
  return (
    <>
      <Heading
        title="Tab Management Extension for Chrome"
        subtitle="TabSlap is a powerful Chrome tab productivity extension designed to help users stay focused on their tasks by monitoring their open tabs and providing timely reminders. With its intuitive design and robust functionality, TabSlap is your go-to tool for enhancing productivity and maintaining focus."
        image="/step_main.gif"
      />
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