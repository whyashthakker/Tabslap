import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on Journalism and News Consumption",
  description: "Explore the profound impact of social media on journalism and news consumption. Discover how social media platforms have transformed the way news is produced, distributed, and consumed, and learn about the challenges and opportunities this presents for journalists and media organizations.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-journalism-and-news-consumption",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on Journalism and News Consumption"
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