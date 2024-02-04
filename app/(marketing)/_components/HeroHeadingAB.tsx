"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useFeatureFlagVariantKey, usePostHog } from "posthog-js/react";
import React, { useEffect, useState } from "react";

export default function HeroHeadingAB() {
  const [landingCopy, setLandingCopy] = useState<string>("");
  // const posthog = usePostHog();
  // posthog.featureFlags.override({'landing-4-copies': 'smm-agent'})  
  const variant = useFeatureFlagVariantKey(
    "landing-4-copies"
  );

  // console.log("variant", variant);

  useEffect(() => {
    if (variant === "smm-agent") {
      setLandingCopy("The kind of Agent you want on your side.");
    } else if (variant === "personal-assistant") {
      setLandingCopy("There are other AI Assistants, and then there is Olly.");
    } else if (variant === "rocketship") {
      setLandingCopy("Biggest Growth Hack on Social Media, on Steroids.");
    // } else if (variant === "Viral-Enhancer-3") {
    //   setLandingCopy("Your AI-Powered Second Brain");
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
