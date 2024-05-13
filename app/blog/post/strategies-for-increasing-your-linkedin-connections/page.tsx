import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your LinkedIn Connections: Expand Your Professional Network",
  description: "Discover effective strategies to increase your LinkedIn connections and expand your professional network. Learn how to optimize your profile, engage with others, and leverage LinkedIn's features to build meaningful connections and grow your presence on the platform.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-linkedin-connections",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your LinkedIn Connections: Expand Your Professional Network"
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