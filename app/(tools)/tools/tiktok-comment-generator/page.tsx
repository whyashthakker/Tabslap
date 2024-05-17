import React from 'react'
import TiktokComment from '../_components/tiktok/tiktok'
import HowToUse from '../_components/tiktok/tiktok-how-to'
import TiktokPageIntroduction from '../_components/tiktok/tiktok-intro'
import TiktokFAQ from '../_components/tiktok/tiktok-faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Free TikTok Comment Generator",
  description: "Generate realistic and visually stunning TikTok comments with the TikTok Comment Generator. Enhance your TikTok experience with engaging and captivating comments that will captivate your audience. We do not support or Generate Fake Tiktok Comments. Please use it responsibly. Comment image Generator TikTok.",
  alternates: {
    canonical: "/tools/tiktok-comment-generator",
  },
  keywords: "Tiktok Comment Generator, Free TikTok AI Comment Generator, Tiktok Comment Generator image, Fake TikTok Comment Generator, AI Comment Generator, Tiktok Comment Maker, tiktok comment reply generator, tiktok comment creator, tiktok comments generator, tiktok reply generator, tiktok comment image generator, tiktok comment generator with profile picture, tiktok comment generator online, tiktok comment generator app, tiktok comment generator download, tiktok comment generator free, tiktok comment generator no watermark, tiktok comment generator without watermark, tiktok comment generator without logo, tiktok comment generator without watermark free, tiktok comment generator without watermark online, tiktok comment generator without watermark app, tiktok comment generator without watermark download, tiktok comment generator without watermark free online, tiktok comment generator without watermark free download, tiktok comment generator without watermark free app, tiktok comment generator without watermark free download online, tiktok comment generator without watermark free download"
};

const TikTokPage = () => {
  return (
    <div>
        <TiktokComment />
        <TiktokPageIntroduction />
        <HowToUse />
        <TiktokFAQ />
    </div>
  )
}

export default TikTokPage