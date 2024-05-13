import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Visual Content in Social Media Marketing",
  description: "Discover the crucial role of visual content in social media marketing. Learn how incorporating engaging visuals can boost your brand's visibility, increase engagement, and drive better results from your social media efforts.",
  alternates: {
    canonical: "/blog/post/the-importance-of-visual-content-in-social-media-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Visual Content in Social Media Marketing"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}