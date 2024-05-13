import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Thought Leadership",
  description: "Discover how social media can be leveraged to establish and enhance thought leadership. Learn the strategies and best practices for using social media platforms to share valuable insights, engage with your audience, and position yourself as an industry expert.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-thought-leadership",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Thought Leadership"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}