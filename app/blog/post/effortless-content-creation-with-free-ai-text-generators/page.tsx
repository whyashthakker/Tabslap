import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Effortless Content Creation with Free AI Text Generators: No Sign Up Required",
  description: "Discover the convenience and power of free AI text generators that require no sign up, enabling you to create high-quality content effortlessly.",
  alternates: {
    canonical: "/blog/post/effortless-content-creation-with-free-ai-text-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Effortless Content Creation with Free AI Text Generators: No Sign Up Required"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}