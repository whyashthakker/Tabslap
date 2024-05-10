import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging User-Generated Content for Social Proof",
  description: "Discover how leveraging user-generated content can boost your brand's social proof, increase trust, and drive engagement and conversions.",
  alternates: {
    canonical: "/blog/post/leveraging-user-generated-content-for-social-proof",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging User-Generated Content for Social Proof"
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