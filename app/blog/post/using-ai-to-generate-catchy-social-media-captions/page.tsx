import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI to Generate Catchy Social Media Captions",
  description: "Learn how AI tools can help you create engaging, witty, and shareable social media captions that capture your audience's attention and boost your online presence.",
  alternates: {
    canonical: "/blog/post/using-ai-to-generate-catchy-social-media-captions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI to Generate Catchy Social Media Captions"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}