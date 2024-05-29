import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top AI Text Generators Online: Free, No Sign-Up Required",
  description: "Discover the best AI text generators available online for free, without the need for sign-up. Explore their features, capabilities, and how they can enhance your writing.",
  alternates: {
    canonical: "/blog/post/top-ai-text-generators-online-free-no-sign-up",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top AI Text Generators Online: Free, No Sign-Up Required"
        datePublished="2023-05-29T08:00:00+00:00"
        dateModified="2023-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}