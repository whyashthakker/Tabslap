import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Elevate Your Browsing Experience with Monica AI Chrome Extension",
  description: "Discover how the Monica AI Chrome Extension transforms your web browsing experience, making it smarter, more personalized, and efficient. From intelligent search to automated tasks, learn how this cutting-edge tool can revolutionize the way you interact with the internet.",
  alternates: {
    canonical: "/blog/post/elevate-your-browsing-experience-with-monica-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Elevate Your Browsing Experience with Monica AI Chrome Extension"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}