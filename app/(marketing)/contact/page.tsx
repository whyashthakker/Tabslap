import { Metadata } from "next";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Olly Social AI Contact Us",
  description: "The Olly Social AI team is here to help you with any questions or concerns you may have. Contact us for support, feedback, or any other inquiries. We are here to help!",
  alternates: {
    canonical: "/contact",
  },
  keywords: "olly, olly ai, ai comment generator, ai comment maker, ai comment creator, ai comments generator, ai reply generator, ai comment image generator, ai comment generator with profile picture, ai comment generator online, ai comment generator app, ai comment generator download, ai comment generator free, ai comment generator no watermark, ai comment generator without watermark, ai comment generator without logo, ai comment generator without watermark free, ai comment generator without watermark online, ai comment generator without watermark app, ai comment generator without watermark download, ai comment generator without watermark free online, ai comment generator without watermark free download, ai comment generator without watermark free app, ai comment generator without watermark free download, reddit summariser, reddit summarizer, reddit summary, reddit summarization, reddit summarization tool, reddit summarization app, reddit summarization software, reddit summarization tool online, reddit summarization tool free, reddit summarization tool without watermark, reddit summarization tool without logo, reddit summarization tool without watermark free, reddit summarization tool without watermark online, reddit summarization tool free online, reddit summarization tool free download, post summarizer",
};



export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
}