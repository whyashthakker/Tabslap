import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Hilarious AI-Generated Quotes: When Machines Try to Be Funny",
  description: "Explore the world of hilarious AI-generated quotes and discover the comedic side of artificial intelligence. Get ready to laugh out loud at the witty and absurd sayings created by machines.",
  alternates: {
    canonical: "/blog/post/hilarious-ai-generated-quotes",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Hilarious AI-Generated Quotes: When Machines Try to Be Funny"
        datePublished="2023-06-04T08:00:00+00:00"
        dateModified="2023-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}