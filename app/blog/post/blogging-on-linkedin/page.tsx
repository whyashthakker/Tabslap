import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Blogging on LinkedIn: How to Grow Your Personal Brand and Engage Your Network",
  description: "Discover the power of blogging on LinkedIn to establish your thought leadership, grow your personal brand, and engage your professional network. Learn tips and best practices for creating compelling content and maximizing your reach on the platform.",
  alternates: {
    canonical: "/blog/post/blogging-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Blogging on LinkedIn: How to Grow Your Personal Brand and Engage Your Network"
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