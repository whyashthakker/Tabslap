// Navbar Component
"use client";

import Link from "next/link";
import { useScrollTop } from "@/components/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full md:p-6 p-2",
      scrolled && "border-b shadow-sm",
      "md:text-base text-xs overflow-x-hidden"
    )}>
      <Logo />
      <div className="flex flex-wrap md:ml-auto md:justify-end justify-between w-full items-center gap-x-2">
          <>
              <Button variant="ghost" size="sm">
                <Link href="https://chromewebstore.google.com/u/2/detail/safegpt/fecdlcopjiaeaoachfgpocdgaanolkkc?hl=en-GB">
                Add Olly
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <Link href="/privacy-policy">
                Privacy Policy
                </Link>
              </Button>
          </>
      </div>
    </div>
  )
}
