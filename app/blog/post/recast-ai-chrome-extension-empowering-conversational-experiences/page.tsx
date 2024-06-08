import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Recast AI Chrome Extension: Empowering Conversational Experiences",
  description: "Explore how the Recast AI Chrome Extension revolutionizes conversational AI, enabling seamless integration and enhanced user experiences.",
  alternates: {
    canonical: "/blog/post/recast-ai-chrome-extension-empowering-conversational-experiences",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Recast AI Chrome Extension: Empowering Conversational Experiences"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}