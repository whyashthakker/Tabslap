import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Boosting Organic Engagement on Facebook Using AI Tools",
  description: "Learn how to leverage AI tools to skyrocket your organic engagement on Facebook, create compelling content, and grow your audience.",
  alternates: {
    canonical: "/blog/post/boosting-organic-engagement-on-facebook-using-ai-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Boosting Organic Engagement on Facebook Using AI Tools"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}