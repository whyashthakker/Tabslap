"use client";

import React, { useEffect } from 'react';
import { ChromeIcon } from 'lucide-react';
import { Button } from '@/components/Button';
import { useFeatureFlagVariantKey, usePostHog } from 'posthog-js/react';
import { usePricing } from '@/app/web/providers/pricingContext';

export function CTAButtonsAB() {
  const posthog = usePostHog();
  const {buyNowProps} = usePricing();
  // posthog.featureFlags.override({'landing-cta-price': 'control'})  
  const variant = useFeatureFlagVariantKey(
    "landing-cta-price"
  );

  // Component rendering
  return (
    <div className="mt-10 grid items-center justify-center gap-x-6 gap-y-2 sm:flex mb-2">
      <Button
        size="2xl"
        color="white"
        className="shadow-lg shadow-teal-500/50"
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
        link={{ href: buyNowProps.url, target: "_blank" }}
        onClick={() => {
          posthog.capture("Clicked Buy Now", { price: buyNowProps.price});
        }}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
      >
        Lifetime Access
        {variant === 'control' && (
        <>
          &nbsp;
          <span className="text-white-600 text-m">{buyNowProps.price} &nbsp;</span>
          <span className="line-through text-gray-800 text-xs">{buyNowProps.originalPrice}</span>
        </>
      )}
      </Button>
    </div>
  );
}
