import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Future of Social Media Marketing: Emerging Trends and Predictions",
  description: "Explore the future of social media marketing and discover the emerging trends and predictions that will shape the industry. Stay ahead of the curve and prepare your brand for the next era of social media marketing.",
  alternates: {
    canonical: "/blog/post/the-future-of-social-media-marketing-trends",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Future of Social Media Marketing: Emerging Trends and Predictions"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}