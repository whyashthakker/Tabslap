import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Crafting Compelling Captions That Drive Engagement: Tips and Tricks",
  description: "Discover the art of crafting compelling captions that drive engagement on social media. Learn tips and tricks to create attention-grabbing captions that resonate with your audience.",
  alternates: {
    canonical: "/blog/post/crafting-compelling-captions-that-drive-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Crafting Compelling Captions That Drive Engagement: Tips and Tricks"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}