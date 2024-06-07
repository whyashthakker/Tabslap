"use client";

import { useState } from "react";
import { CheckIcon, CreditCardIcon, CrossIcon, XIcon } from "lucide-react";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Button as ShadcnButton } from "@/components/ui/button";

import pricingFeatures from "./pricing-features";
import { usePricing } from "@/app/web/providers/pricingContext";
import RefundOption from "./refund-option";
import Link from "next/link";

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
           Choose the plan that fits your needs.
         </p>
       </div>
       <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
       Get access to <span className="font-bold">Quality</span> and <span className="font-bold">Quantity</span> with our flexible pricing options.
       </p>

       <PricingPlans />
     </div>
 );
}

function PricingPlans() {
 const { buyNowProps } = usePricing();

 return (
   <div className="bg-white py-4 sm:py-8">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
         {/* Free Plan */}
         <div className="rounded-3xl bg-white p-8 shadow-md">
           <h3 className="font-cal text-2xl text-gray-900">Free Forever</h3>
           <p className="mt-2 text-sm text-gray-500">Get started for free, forever.</p>
           <p className="mt-6 text-base leading-7 text-gray-600">
             Basic features with limited usage.
           </p>
           <div className="mt-10">
             <p className="text-4xl font-extrabold text-gray-900">$0</p>
             <p className="mt-1 text-sm font-semibold text-gray-500">Forever</p>
           </div>
           <ul
             role="list"
             className="mt-8 space-y-4 text-sm leading-6 text-gray-600"
           >
             <li className="flex gap-x-3">
               <CheckIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               5 Free Comments / Day
             </li>
             <li className="flex gap-x-3">
               <CheckIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               Supported on all Social Media Platforms
             </li>
             <li className="flex gap-x-3">
               <XIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               Multi language support
             </li>
             <li className="flex gap-x-3">
               <XIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               Gamification
             </li>
             <li className="flex gap-x-3">
               <XIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               Longer Comments
             </li>
             <li className="flex gap-x-3">
               <XIcon
                 className="h-6 w-5 flex-none text-blue-600"
                 aria-hidden="true"
               />
               Model Support
             </li>
           </ul>
           <ShadcnButton className="mt-10 w-full">
             <Link href="https://chromewebstore.google.com/detail/olly-social-media-sidekic/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank">
               Start for Free
             </Link>
           </ShadcnButton>
         </div>

        {/* Lifetime Plan */}
         <div className="rounded-3xl bg-white p-8 shadow-lg shadow-teal-600">
           <div className="flex items-center">
             <h3 className="font-cal text-2xl text-gray-900">Lifetime Access</h3>
             <div className="ml-4">
               <Tag color="green">Most Popular</Tag>
             </div>
           </div>
           <p className="mt-2 text-sm text-gray-500">Get full access to all features forever.</p>
           <p className="mt-6 text-base leading-7 text-gray-600">
             Access to all features with your OpenAI API key.
           </p>
           <p className="text-2xs text-blue-500 mt-2">
            <Link href="/openai-cost-calculator" target="_blank">
            OpenAI Cost calculator
            </Link>
            </p>
           <div className="mt-5">
             <p className="text-4xl font-extrabold text-gray-900">{buyNowProps.price}</p>
             <p className="mt-1 text-sm font-semibold text-gray-500">One-time payment</p>
           </div>
           <ul
             role="list"
             className="mt-8 space-y-4 text-sm leading-6 text-gray-600"
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
           <Link
             href={buyNowProps.url}
             target="_blank"
             className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
           >
             Get Lifetime Access
           </Link>
         </div>

         {/* Subscription Plan */}
         <div className="rounded-3xl bg-white p-8 shadow-md">
         <div className="flex items-center">
             <h3 className="font-cal text-2xl text-gray-900">Monthly Plan</h3>
             <div className="ml-4">
               <Tag color="white">New ✨</Tag>
             </div>
           </div>
           <p className="mt-2 text-sm text-gray-500">Pay as you go, cancel anytime.</p>
           <p className="mt-6 text-base leading-7 text-gray-600">
             Access to all features using our OpenAI API key.
           </p>
           <p className="text-2xs text-blue-500 mt-2">
            <Link href="/openai-cost-calculator" target="_blank">
            OpenAI Cost calculator
            </Link>
            </p>
           <div className="mt-5">
             <p className="text-4xl font-extrabold text-gray-900">$2.99</p>
             <p className="mt-1 text-sm font-semibold text-gray-500">Per Month</p>
           </div>
           <ul
             role="list"
             className="mt-8 space-y-4 text-sm leading-6 text-gray-600"
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
           <Link
             href={"https://safegpt.lemonsqueezy.com/buy/ccfcb6bb-06c7-4c35-b0f2-949cd3ca7452"}
             target="_blank"
             className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
           >
             Subscribe Now
           </Link>
         </div>

       </div>
     </div>
   </div>
 );
}