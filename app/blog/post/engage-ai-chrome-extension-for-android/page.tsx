import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Engage AI Chrome Extension for Android: Elevate Your Mobile Browsing Experience",
  description: "Discover the Engage AI Chrome Extension for Android and how it can transform your mobile browsing experience with AI-powered features. Learn about its benefits and how to install it on your Android device.",
  alternates: {
    canonical: "/blog/post/engage-ai-chrome-extension-for-android",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Engage AI Chrome Extension for Android: Elevate Your Mobile Browsing Experience"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}