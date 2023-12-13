"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Heading = () => {

  const handleButtonClick = () => {
    window.open("https://chromewebstore.google.com/u/2/detail/safegpt/fecdlcopjiaeaoachfgpocdgaanolkkc?hl=en-GB", "_blank")
  }

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-10">
        Your Social Media Sidekick
      </h1>
      <h3 className="text-xs md:text-m font-small mb-4 text-gray-500">
        Generate Comments, Replies, Virality Scores & similar Posts with AI.
      </h3>
          <Button variant="default" size="sm" onClick={handleButtonClick}>
              Add Olly
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
    </div>
  )
}