import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Integrating AI Comment Generators with Your Social Media Accounts: A Step-by-Step Guide",
  description: "Learn how to seamlessly integrate AI comment generators with your social media accounts. Follow our step-by-step guide to streamline your comment management and enhance customer engagement.",
  alternates: {
    canonical: "/blog/post/integrating-ai-comment-generators-with-your-social-media-accounts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Integrating AI Comment Generators with Your Social Media Accounts: A Step-by-Step Guide"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}