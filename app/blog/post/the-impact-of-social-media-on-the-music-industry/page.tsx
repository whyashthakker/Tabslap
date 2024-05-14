import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on the Music Industry",
  description: "Explore how social media has revolutionized the music industry, from artist discovery and fan engagement to music promotion and distribution. Learn about the key ways social media is shaping the future of music.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-the-music-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on the Music Industry"
        datePublished="2024-05-14T08:00:00+00:00"
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}