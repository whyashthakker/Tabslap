import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Calendar That Works: Streamline Your Content Strategy",
  description: "Learn how to create an effective social media content calendar that streamlines your content strategy, saves time, and drives engagement. Discover tips and best practices for planning, organizing, and executing your social media content.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-calendar-that-works",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Calendar That Works: Streamline Your Content Strategy"
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