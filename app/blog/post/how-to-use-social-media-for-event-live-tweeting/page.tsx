import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Event Live-Tweeting",
  description: "Learn the best practices and strategies for effectively live-tweeting events using social media. Discover how to engage your audience, increase event visibility, and create a memorable experience for both attendees and virtual followers.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-event-live-tweeting",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Event Live-Tweeting"
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