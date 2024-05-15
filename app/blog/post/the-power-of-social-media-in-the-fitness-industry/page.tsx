import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Fitness Industry",
  description: "Discover how social media has revolutionized the fitness industry, empowering fitness professionals, influencers, and enthusiasts to connect, inspire, and grow their reach.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-fitness-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Fitness Industry"
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