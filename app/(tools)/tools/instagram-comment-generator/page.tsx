import React from 'react'
import TiktokComment from '../_components/instagram/instagram'
import { Metadata } from 'next'
import InstagramHowToUse from '../_components/instagram/insta-how-to-use';
import InstagramFAQ from '../_components/instagram/insta-faq';
import InstagramPageIntroduction from '../_components/instagram/insta-intro';

export const metadata: Metadata = {
  title: "Free Instagram Comment Generator",
  description: "Generate realistic and visually stunning Instagram comments with the Instagram Comment Generator. Enhance your Instagram experience with engaging and captivating comments that will captivate your audience. We do not support or Generate Fake Instagram Comments. Please use it responsibly. Comment image Generator Instagram.",
  alternates: {
    canonical: "/tools/instagram-comment-generator",
  },
  keywords: "Instagram Comment Generator, Free Instagram AI Comment Generator, Instagram Comment Generator image, Fake Instagram Comment Generator, AI Comment Generator, Instagram Comment Maker, Instagram comment reply generator, Instagram comment creator, Instagram comments generator, Instagram reply generator, Instagram comment image generator, Instagram comment generator with profile picture, Instagram comment generator online, Instagram comment generator app, Instagram comment generator download, Instagram comment generator free, Instagram comment generator no watermark, Instagram comment generator without watermark, Instagram comment generator without logo, Instagram comment generator without watermark free, Instagram comment generator without watermark online, Instagram comment generator without watermark app, Instagram comment generator without watermark download, Instagram comment generator without watermark free online, Instagram comment generator without watermark free download, Instagram comment generator without watermark free app, Instagram comment generator without watermark free download online, Instagram comment generator without watermark free download"
};

const TikTokPage = () => {
  return (
    <div>
        <TiktokComment />
        <InstagramPageIntroduction />
        <InstagramHowToUse />
        <InstagramFAQ />
    </div>
  )
}

export default TikTokPage