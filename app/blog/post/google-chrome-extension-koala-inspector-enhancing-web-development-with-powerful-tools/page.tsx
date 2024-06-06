import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Google Chrome Extension Koala Inspector: Enhancing Web Development with Powerful Tools",
  description: "Discover how the Google Chrome Extension Koala Inspector empowers web developers with a suite of powerful tools to inspect, debug, and optimize websites.",
  alternates: {
    canonical: "/blog/post/google-chrome-extension-koala-inspector-enhancing-web-development-with-powerful-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Google Chrome Extension Koala Inspector: Enhancing Web Development with Powerful Tools"
        datePublished="2024-06-06T08:00:00+00:00"
        dateModified="2024-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}