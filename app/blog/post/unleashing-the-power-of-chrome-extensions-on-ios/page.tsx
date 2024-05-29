import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of Chrome Extensions on iOS: Enhancing Mobile Browsing Experience",
  description: "Discover how Chrome extensions on iOS are revolutionizing mobile browsing, offering enhanced functionality, productivity, and personalization for iPhone and iPad users.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-chrome-extensions-on-ios",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of Chrome Extensions on iOS: Enhancing Mobile Browsing Experience"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}