import React from 'react'
import TiktokComment from '../_components/instagram/instagram'
import { Metadata } from 'next'
import InstagramHowToUse from '../_components/instagram/insta-how-to-use';
import InstagramFAQ from '../_components/instagram/insta-faq';
import YoutubeComment from '../_components/youtube-shorts/youtube-shorts';
import YouTubeShortsHowToUse from '../_components/youtube-shorts/youtube-how-to';
import YoutubePageIntroduction from '../_components/youtube-shorts/youtube-intro';
import YoutubeFAQ from '../_components/youtube-shorts/youtube-shorts-faq';

export const metadata: Metadata = {
  title: "Free YouTube Shorts Comment Generator",
  description:
    "Generate realistic and visually stunning YouTube Shorts comments with the YouTube Shorts Comment Generator. Enhance your YouTube Shorts experience with engaging and captivating comments that will captivate your audience. We do not support or Generate Fake YouTube Comments. Please use it responsibly. Comment image Generator YouTube Shorts.",
  alternates: {
    canonical: "/tools/youtube-shorts-comment-generator",
  },
  keywords:
    "YouTube Shorts Comment Generator, Free YouTube Shorts AI Comment Generator, YouTube Shorts Comment Generator image, YouTube Shorts Comment Maker, YouTube Shorts comment reply generator, YouTube Shorts comment creator, YouTube Shorts comments generator, YouTube Shorts reply generator, YouTube Shorts comment image generator, YouTube Shorts comment generator with profile picture, YouTube Shorts comment generator online, YouTube Shorts comment generator app, YouTube Shorts comment generator download, YouTube Shorts comment generator free, YouTube Shorts comment generator no watermark, YouTube Shorts comment generator without watermark, YouTube Shorts comment generator without logo, YouTube Shorts comment generator without watermark free, YouTube Shorts comment generator without watermark online, YouTube Shorts comment generator without watermark app, YouTube Shorts comment generator without watermark download, YouTube Shorts comment generator without watermark free online, YouTube Shorts comment generator without watermark free download, YouTube Shorts comment generator without watermark free app, YouTube Shorts comment generator without watermark free download online, YouTube Shorts comment generator without watermark free download",
};

const TikTokPage = () => {
  return (
    <div>
        <YoutubeComment />
        <YoutubePageIntroduction />
        <YouTubeShortsHowToUse />
        <YoutubeFAQ />
    </div>
  )
}

export default TikTokPage