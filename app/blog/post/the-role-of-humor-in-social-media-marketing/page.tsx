import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Humor in Social Media Marketing: Engaging Audiences with Laughter",
  description: "Explore the role of humor in social media marketing and learn how to effectively use wit and laughter to engage audiences, build brand loyalty, and stand out in a crowded digital landscape.",
  alternates: {
    canonical: "/blog/post/the-role-of-humor-in-social-media-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Humor in Social Media Marketing: Engaging Audiences with Laughter"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}