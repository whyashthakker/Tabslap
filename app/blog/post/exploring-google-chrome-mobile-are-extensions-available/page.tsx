import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring Google Chrome Mobile: Are Extensions Available?",
  description: "Discover whether Google Chrome Mobile supports extensions and explore alternative ways to enhance your mobile browsing experience.",
  alternates: {
    canonical: "/blog/post/exploring-google-chrome-mobile-are-extensions-available",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring Google Chrome Mobile: Are Extensions Available?"
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