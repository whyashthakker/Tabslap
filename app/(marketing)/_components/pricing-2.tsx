"use client";

import { useState } from "react";
import { CheckIcon, CreditCardIcon } from "lucide-react";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Button as ShadcnButton } from "@/components/ui/button";

import pricingFeatures from "./pricing-features";
import { usePricing } from "@/app/web/providers/pricingContext";
import RefundOption from "./refund-option";

export function Pricing() {

  return (
      <div
        id="pricing"
        className="relative isolate mx-auto max-w-7xl bg-white px-6 pb-32 pt-10 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-cal text-base leading-7 text-blue-600">
            Pricing
          </h2>
          <p className="mt-2 font-cal text-4xl text-gray-900 sm:text-5xl">
            We hate subscriptions.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Get lifetime access to <span className="font-bold">Quality</span> and <span className="font-bold">Quantity</span> for the very first time.
        </p>

        <LifetimePricing />
      </div>
  );
}

function LifetimePricing() {

  const {buyNowProps} = usePricing();

  return (
    <div className="bg-white py-4 sm:py-8">
      <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="flex items-center font-cal text-2xl text-gray-900">
            Lifetime access
            <div className="ml-4">
              <Tag color="green">Limited Time Offer</Tag>
            </div>
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lifetime updates and support.
            <br />
            <RefundOption />
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none font-cal text-sm leading-6 text-blue-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {pricingFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Lifetime access to Olly
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  {buyNowProps.price}
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  USD
                </span>
              </p>
              <a
                href={buyNowProps.url}
                target="_blank"
                className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get lifetime access
              </a>
              <p className="mt-6 text-xs leading-5 text-gray-600">
                This is a launch offer and price will increase to $49.99 after February 15th.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
