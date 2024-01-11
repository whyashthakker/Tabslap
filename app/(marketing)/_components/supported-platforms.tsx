import Image from 'next/image';
import React from 'react'

const SupportedPlatforms = () => {
  return (
    <div>
          <h2 className="font-semibold text-xl">Supported Platforms: </h2>
      <div className="flex justify-center">
      <Image src="/platforms-supported.png" width={400} height={100} alt="We currently support Facebook, LinkedIn, Instagram, Reddit, Product Hunt, YouTube, Twitter, and plan to add Hacker News, Indie Hackers, Quora, Medium, Pinterest, TikTok, Twitch, and more." />
      </div>
    </div>
  )
}

export default SupportedPlatforms;