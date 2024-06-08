import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Install Chrome Extension UiPath: Streamlining Web Automation Workflows",
  description: "Learn how to install the UiPath Chrome Extension and unlock the power of web automation for increased productivity and efficiency.",
  alternates: {
    canonical: "/blog/post/install-chrome-extension-uipath-streamlining-web-automation-workflows",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Install Chrome Extension UiPath: Streamlining Web Automation Workflows"
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