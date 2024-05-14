"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useFeatureFlagVariantKey, usePostHog } from "posthog-js/react";
import React, { useEffect, useState } from "react";

export default function HeroHeadingAB() {
  const [landingCopy, setLandingCopy] = useState<string>("");
  // const posthog = usePostHog();
  // posthog.featureFlags.override({'new_landing_copy': 'test-8'})  
  const variant = useFeatureFlagVariantKey(
    "new_landing_copy"
  );

  // console.log("variant", variant);

  useEffect(() => {
    if (variant === "test-1") {
      setLandingCopy("Fuel your Growth Rocket 🚀");
    } else if (variant === "test-2") {
      setLandingCopy("With you in the Hustle, 24/7 🌟");
    } else if (variant === "test-3") {
      setLandingCopy("Helping you grow, One Comment at a Time.");
    } else if (variant === "test-4") {
      setLandingCopy("Goals achieved, only 10x Faster ✅");
    } else if (variant === "test-5") {
      setLandingCopy("There are no shortcuts. Only Hustle.");
    } else if (variant === "test-6") {
      setLandingCopy("Never run out of Ideas for Posts & Comments, ever again.");
    } else if (variant === "test-7") {
      setLandingCopy("Writers Block? Creative Slump? Not anymore.");
    } else if (variant === "test-8") {
      setLandingCopy("AI Agent that is more human than most humans.");
    } else if (variant === "control") {
      setLandingCopy("Your AI-Powered Second Brain 🧠");
    } else {
      setLandingCopy("Your AI-Powered Second Brain 🧠");
    }

    // console.log("variant", variant);

  }, [variant]);

  if (!variant && process.env.NEXT_PUBLIC_POSTHOG_KEY)
    return <Skeleton className="h-28 w-full rounded" />;

  return <>{landingCopy}</>;
}
