"use client";

import React, { useEffect } from 'react';
import { ChromeIcon } from 'lucide-react';
import { Button } from '@/components/Button';
import { useFeatureFlagVariantKey, usePostHog } from 'posthog-js/react';
import { usePricing } from '@/app/web/providers/pricingContext';

export function CTALifetime() {
  const posthog = usePostHog();
  const {buyNowProps} = usePricing();
  // posthog.featureFlags.override({'landing-subscription-type': 'test'})  
  const variant = useFeatureFlagVariantKey(
    "landing-subscription-type"
  );

  // Component rendering
  return (
    <div className="mt-5 grid items-center justify-center gap-x-6 gap-y-2 sm:flex mb-5">
      {/* <Button
        size="2xl"
        color="primary"
        // className="shadow-lg shadow-teal-500/50"
        link={{ href: "https://chromewebstore.google.com/detail/tabslap-social-media-sidekic/ofjpapfmglfjdhmadpegoeifocomaeje", target: "_blank"}}
        onClick={() => {
          posthog.capture("Clicked Get Started");
        }}
      >
        <ChromeIcon className="mr-2 h-4 w-4" />
        Get Started for Free
      </Button> */}
      <Button
        size="2xl"
        link={variant === 'control' ? { href: buyNowProps.url ?? '', target: "_blank" } : { href: buyNowProps.monthlyUrl ?? '', target: "_blank" }}
        onClick={() => {
          posthog.capture("Clicked Buy Now", { price: buyNowProps.price});
        }}
        color='primary'
        className='shadow-lg shadow-teal-500'
      >
        {variant === 'control' ? (
          <>Get Lifetime Access</>
        ) : (
          <>Start @ $2.99/month</>
        )}
      </Button>
    </div>
  );
}
