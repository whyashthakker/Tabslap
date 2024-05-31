import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleash Your Storytelling Potential with Storytell.ai Chrome Extension",
  description: "Discover how the Storytell.ai Chrome Extension empowers you to create captivating stories, novels, and narratives with ease. From story prompts to character development and plot generation, learn how this innovative tool can revolutionize your writing journey.",
  alternates: {
    canonical: "/blog/post/unleash-your-storytelling-potential-with-storytell-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleash Your Storytelling Potential with Storytell.ai Chrome Extension"
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