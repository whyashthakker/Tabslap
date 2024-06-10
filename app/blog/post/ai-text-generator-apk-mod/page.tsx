import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator APK Mod: Unleashing Creative Writing on Mobile",
  description: "Discover the power of AI text generation on mobile with the AI Text Generator APK Mod. Unleash your creativity and write compelling content on the go.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-apk-mod",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator APK Mod: Unleashing Creative Writing on Mobile"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}