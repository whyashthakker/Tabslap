import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "TabSlap: The Ultimate Free Chrome Tab Productivity Extension",
  description: "Discover how TabSlap, the ultimate free Chrome tab productivity extension, can help you stay focused, minimize distractions, and boost your productivity while browsing the web.",
  alternates: {
    canonical: "/blog/post/tabslap-ultimate-free-chrome-tab-productivity-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="TabSlap: The Ultimate Free Chrome Tab Productivity Extension"
        datePublished="2024-06-13T08:00:00+00:00"
        dateModified="2024-06-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://yashthakker.com"
        image={[]}
      />
      <Content />
    </>
  );
}