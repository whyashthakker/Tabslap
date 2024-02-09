"use client"

import { useFeatureFlagVariantKey } from 'posthog-js/react';
import React, { createContext, useContext, ReactNode } from 'react';

interface BuyNowButtonProps {
  url: string;
  price: string;
  originalPrice: string;
}

interface PricingContextType {
  buyNowProps: BuyNowButtonProps;
}

const defaultBuyNowProps: BuyNowButtonProps = {
  url: 'https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca',
  price: '$29.99',
  originalPrice: '$49.99',
};

const PricingContext = createContext<PricingContextType>({ buyNowProps: defaultBuyNowProps });

export const usePricing = () => useContext(PricingContext);

export const PricingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const CtaVariant = usePostHogFeatureFlagVariant('button_price_testing'); // Use your actual feature flag name

  const CtaVariant = useFeatureFlagVariantKey("button_price_testing");

  let buyNowProps: BuyNowButtonProps;

  switch (CtaVariant) {
    case '24_usd':
      buyNowProps = {
        url: 'https://safegpt.lemonsqueezy.com/checkout/buy/655cc01f-a311-4315-bfa8-3085e4dddc48',
        price: '$24.99',
        originalPrice: '$49.99',
      };
      break;
    case '19_usd':
      buyNowProps = {
        url: 'https://safegpt.lemonsqueezy.com/checkout/buy/341f78dc-2abb-4289-ba20-a07fed321f47',
        price: '$19.99',
        originalPrice: '$49.99',
      };
      break;
    case 'control':
      buyNowProps = {
        url: 'https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca',
        price: '$29.99',
        originalPrice: '$49.99',
      };
      break;
    default:
      buyNowProps = defaultBuyNowProps;
  }

  return (
    <PricingContext.Provider value={{ buyNowProps }}>
      {children}
    </PricingContext.Provider>
  );
};
