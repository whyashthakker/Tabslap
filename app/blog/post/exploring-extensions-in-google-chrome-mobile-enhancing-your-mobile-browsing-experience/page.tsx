import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring Extensions in Google Chrome Mobile: Enhancing Your Mobile Browsing Experience",
  description: "Discover whether Google Chrome Mobile supports extensions and how they can enhance your mobile browsing experience. Learn about the availability, installation process, and popular extensions for Chrome on mobile devices.",
  alternates: {
    canonical: "/blog/post/exploring-extensions-in-google-chrome-mobile-enhancing-your-mobile-browsing-experience",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring Extensions in Google Chrome Mobile: Enhancing Your Mobile Browsing Experience"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}