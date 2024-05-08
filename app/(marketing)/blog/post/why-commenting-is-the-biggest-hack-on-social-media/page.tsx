import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Why Commenting is the Biggest Hack on Social Media",
  description: "Discover the power of commenting on social media and how it can boost your engagement, reach, and influence. Learn the best practices and strategies for effective commenting.",
  alternates: {
    canonical: "/blog/post/why-commenting-is-the-biggest-hack-on-social-media",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Why Commenting is the Biggest Hack on Social Media"
        datePublished="2024-05-08T08:00:00+00:00"
        dateModified="2024-05-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}