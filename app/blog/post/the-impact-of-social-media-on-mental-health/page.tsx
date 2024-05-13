import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on Mental Health: Understanding the Risks and Benefits",
  description: "Explore the complex relationship between social media and mental health. Discover the potential risks and benefits of social media use and learn strategies for maintaining a healthy balance in the digital age.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-mental-health",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on Mental Health: Understanding the Risks and Benefits"
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