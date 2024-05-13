import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Travel Industry: Transforming the Way We Travel",
  description: "Explore the transformative power of social media in the travel industry. Discover how social media platforms are reshaping the way travelers plan, experience, and share their journeys, and learn how travel businesses can leverage social media to attract, engage, and inspire travelers.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-travel-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Travel Industry: Transforming the Way We Travel"
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