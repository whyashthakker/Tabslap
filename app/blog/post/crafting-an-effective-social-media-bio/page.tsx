import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Crafting an Effective Social Media Bio: Making a Lasting First Impression",
  description: "Learn how to create a compelling social media bio that makes a lasting first impression on your audience. Discover tips and strategies for optimizing your bio to showcase your brand and attract followers.",
  alternates: {
    canonical: "/blog/post/crafting-an-effective-social-media-bio",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Crafting an Effective Social Media Bio: Making a Lasting First Impression"
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