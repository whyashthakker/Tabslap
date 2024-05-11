import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Live Streaming on Social Media Platforms: Engaging Your Audience in Real-Time",
  description: "Discover the power of live streaming on social media platforms and learn how to leverage this engaging format to connect with your audience in real-time, build brand awareness, and drive business growth.",
  alternates: {
    canonical: "/blog/post/the-power-of-live-streaming-on-social-media-platforms",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Live Streaming on Social Media Platforms: Engaging Your Audience in Real-Time"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}