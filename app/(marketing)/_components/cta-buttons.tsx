"use client";

import { ChromeIcon, GithubIcon, Heart } from "lucide-react";
import { Button } from "@/components/Button";
import { usePostHog } from "posthog-js/react";

export function CTAButtons() {
  const posthog = usePostHog();

  return (
    <div className="mt-10 grid items-center justify-center gap-x-6 gap-y-2 sm:flex mb-2">
      <Button
        size="2xl"
        color="white"
        className="shadow-lg shadow-teal-500/50"
        link={{ href: "https://chromewebstore.google.com/detail/tabslap-social-media-sidekic/ofjpapfmglfjdhmadpegoeifocomaeje", target: "_blank"}}
        onClick={() => {
          posthog.capture("Clicked Get Started");
        }}
      >
        <ChromeIcon className="mr-2 h-4 w-4" />
        Add Tabslap to Chrome
      </Button>
      <Button
        size="2xl"
        link={{ href: "https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca", target: "_blank" }}
        onClick={() => {
          posthog.capture("Clicked Buy Now", {});
        }}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
      >
        {/* <Heart className="mr-2 h-4 w-4 fill-red-500" /> */}
        Lifetime Access &nbsp;
        <span className="text-white-600 text-m">$29.99 &nbsp;</span> <span className="line-through text-gray-800 text-xs">$49.99</span>
      </Button>
    </div>
  );
}
