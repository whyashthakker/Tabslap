import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Are There AI Comment Generators That Offer Voice-to-Text Comments?",
  description: "Discover the emerging trend of AI comment generators with voice-to-text capabilities, their benefits, challenges, and potential applications in various domains.",
  alternates: {
    canonical: "/blog/post/are-there-ai-comment-generators-that-offer-voice-to-text-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Are There AI Comment Generators That Offer Voice-to-Text Comments?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}