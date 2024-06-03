import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Enhancing Language Translation with Google Translate Chrome Extension",
  description: "Learn how to add the Google Translate extension to your Chrome browser and unlock seamless language translation capabilities for a globalized browsing experience.",
  alternates: {
    canonical: "/blog/post/enhancing-language-translation-with-google-translate-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Enhancing Language Translation with Google Translate Chrome Extension"
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