import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Entertainment Industry",
  description: "Discover how social media is transforming the entertainment industry, from content creation and distribution to audience engagement and fan culture. Learn how entertainment professionals can harness the power of social media to build their brands, connect with fans, and drive success in the digital age.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-entertainment-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Entertainment Industry"
        datePublished="2024-05-15T08:00:00+00:00"
        dateModified="2024-05-15T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}