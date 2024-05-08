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
    if (variant === "upto-date-ai-2024") {
      setHeaderCopy("The Most Up-to-Date AI Course of 2024");
    } else if (variant === "genai-wizard") {
      setHeaderCopy("Become an Image Generation Wizard.");
    } else if (variant === "control") {
      setHeaderCopy("The Most up to date AI Course of 2024.");
    } else if (variant === "become-001") {
      setHeaderCopy("Become a Top 0.01% in Your Field.");
    } else if (variant === "beat-genai-revolution") {
      setHeaderCopy("Beat the GenAI Revolution.");
    } else if (variant === "write-prompts-like-pro") {
      setHeaderCopy("Become a Prompt Master.");
    } else {
      setHeaderCopy("The Most up to date AI Course of 2024.");
    }
  }, [variant]);

  if (!variant) {
    return (
      <div className="flex flex-col font-cal items-center text-center mt-8 shadow-lg shadow-orange-500 rounded-lg">
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
    <div className="flex flex-col font-cal items-center text-center mt-8 shadow-lg shadow-orange-500 rounded-lg">
      <Card>
        <CardHeader className="text-l">{headerCopy}</CardHeader>
        <CardContent className="text-xs text-gray-500">
          AI Agents, AGI, RAG, Content Creation, GPT-4, Claude-3, AI Text,
          Video, Audio, Image Generation, Prompt Engineering and more..
          <br />
          <Link href={"https://learn.genaicourses.com/enroll/generative-ai-masterclass"}>
            <Button
              variant={"default"}
              className="mt-5"
              onClick={() => {
                posthog.capture(`Clicked Get it now on page ${window.location.pathname}`);
              }}
            >
              Get it Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};