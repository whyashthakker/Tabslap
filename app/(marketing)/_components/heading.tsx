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
        Your Very Own Personal Assistant.
      </h1>
      <h3 className="text-xs md:text-m font-small mb-4 text-gray-500">
        Redacts Sensitive Information. Generates Content on the fly. Deep Dives into Topics.
        All in your browser.
      </h3>
          <Button variant="default" size="sm" onClick={handleButtonClick}>
              Add Sidekick
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
    </div>
  )
}