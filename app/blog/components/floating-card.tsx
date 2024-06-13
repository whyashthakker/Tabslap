"use client";

import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";
import { useState, useEffect } from "react";
import { useFeatureFlagVariantKey, usePostHog } from "posthog-js/react";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogPostHeader = () => {
  const [headerCopy, setHeaderCopy] = useState("");
  const posthog = usePostHog();
  const variant = useFeatureFlagVariantKey("blog-button-cta");

  useEffect(() => {
    if (variant === "test-1") {
      setHeaderCopy("Automate Social Media Engagement.");
    } else if (variant === "test-2") {
      setHeaderCopy("Unlock lifetime access to AI Social Media Agent.");
    } else if (variant === "control") {
      setHeaderCopy("Biggest Hack on Social Media, now at your fingertips.");
    } else if (variant === "test-3") {
      setHeaderCopy("Unlock your AI Second Brain.");
    } else if (variant === "test-4") {
      setHeaderCopy("The AI Companion you've been waiting for.");
    } else if (variant === "test-5") {
      setHeaderCopy("Quality and Quantity, for the very first time.");
    } else {
      setHeaderCopy("Unlock the power of AI for Social Media.");
    }
  }, [variant]);

  if (!variant) {
    return (
      <div className="flex flex-col font-cal items-center text-center mt-8 shadow-lg shadow-teal-500 rounded-lg">
        <Card>
          <CardHeader className="text-l">
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </CardHeader>
          <CardContent className="text-xs text-gray-500">
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-1/2 mx-auto mt-4" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col font-cal items-center text-center mt-8 shadow-lg shadow-teal-500 rounded-lg">
      <Card>
        <CardHeader className="text-l">{headerCopy}</CardHeader>

        <CardContent className="text-xs text-gray-500">
          AI Generated Comments, Virality scores, Posts and a lot more. With Lifetime access.
          <br />
          <Link href={"https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca"}>
            <Button
              variant={"default"}
              className="mt-5"
              onClick={() => {
                posthog.capture(`Clicked Get it now on page`);
              }}
            >
              Get Tabslap Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};