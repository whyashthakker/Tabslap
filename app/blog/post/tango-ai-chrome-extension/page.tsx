import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Tango AI Chrome Extension: Your Ultimate Dancing Partner",
  description: "Discover the revolutionary Tango AI Chrome Extension that harnesses the power of AI to revolutionize the way you learn, practice, and perfect the art of tango dancing.",
  alternates: {
    canonical: "/blog/post/tango-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Tango AI Chrome Extension: Your Ultimate Dancing Partner"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}