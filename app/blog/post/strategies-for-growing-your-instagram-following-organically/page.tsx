import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Growing Your Instagram Following Organically", 
  description: "Discover effective strategies and best practices for growing your Instagram following organically, without relying on paid promotions or questionable tactics.",
  alternates: {
    canonical: "/blog/post/strategies-for-growing-your-instagram-following-organically",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Growing Your Instagram Following Organically"
        datePublished="2024-05-08T08:00:00+00:00" 
        dateModified="2024-05-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}