import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Rise of Social Media Commerce: Revolutionizing the Way We Shop Online",
  description: "Discover how social media commerce is transforming the online shopping landscape, providing new opportunities for businesses and consumers alike. Learn about the key trends, platforms, and strategies driving the growth of social commerce.",
  alternates: {
    canonical: "/blog/post/the-rise-of-social-media-commerce",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Rise of Social Media Commerce: Revolutionizing the Way We Shop Online"
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