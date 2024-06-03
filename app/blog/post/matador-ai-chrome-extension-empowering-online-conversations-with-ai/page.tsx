import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Matador.ai Chrome Extension: Empowering Online Conversations with AI",
  description: "Explore how the Matador.ai Chrome Extension revolutionizes online conversations, providing real-time insights, tone analysis, and personalized suggestions for more effective communication.",
  alternates: {
    canonical: "/blog/post/matador-ai-chrome-extension-empowering-online-conversations-with-ai",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Matador.ai Chrome Extension: Empowering Online Conversations with AI"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}