import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Rise of TikTok and Short-Form Video Content: Embracing the Future of Social Media",
  description: "Explore the explosive growth of TikTok and the increasing popularity of short-form video content. Learn how businesses can leverage this trend to engage audiences, build brand awareness, and drive marketing success in the evolving social media landscape.",
  alternates: {
    canonical: "/blog/post/the-rise-of-tiktok-and-short-form-video-content",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Rise of TikTok and Short-Form Video Content: Embracing the Future of Social Media"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}