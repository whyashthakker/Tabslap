"use client";

import { ChromeIcon, GithubIcon, Heart } from "lucide-react";
import { Button } from "@/components/Button";
import { usePostHog } from "posthog-js/react";

export function CTAButtons() {
  const posthog = usePostHog();

  return (
    <div className="mt-10 grid items-center justify-center gap-x-6 gap-y-2 sm:flex">
      <Button
        size="2xl"
        link={{ href: "https://chromewebstore.google.com/detail/olly-social-media-sidekic/ofjpapfmglfjdhmadpegoeifocomaeje", target: "_blank"}}
        onClick={() => {
          posthog.capture("Clicked Get Started");
        }}
      >
        <ChromeIcon className="mr-2 h-4 w-4" />
        Add Olly to Chrome
      </Button>
      <Button
        size="2xl"
        color="white"
        link={{ href: "https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", target: "_blank" }}
        onClick={() => {
          posthog.capture("Clicked Star on Github", {});
        }}
      >
        <Heart className="mr-2 h-4 w-4 fill-red-500" />
        Get Lifetime Access
      </Button>
    </div>
  );
}
