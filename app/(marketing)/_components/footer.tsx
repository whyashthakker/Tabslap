// Footer Component
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center w-full md:p-6 p-2 bg-background z-50 dark:bg-[#1F1F1F] md:text-base text-xs overflow-x-hidden">
      <Logo />
      <div className="flex flex-wrap md:flex justify-center md:justify-normal items-center gap-x-2 text-muted-foreground">
        <Link href="https://snapy.ai">
          <Button variant="ghost" size="sm">
            Never Edit Videos Ever Again 🎬
          </Button>
        </Link>
        <Link href="https://explainx.ai">
          <Button variant="ghost" size="sm">
            50K+ AI Newsletter Community 🚀
          </Button>
        </Link>
        <Link href="https://narrate.bio">
          <Button variant="ghost" size="sm">
            Messy Audio Notes to Beautiful Memos ❤️
          </Button>
        </Link>
      </div>
    </div>
  )
}
