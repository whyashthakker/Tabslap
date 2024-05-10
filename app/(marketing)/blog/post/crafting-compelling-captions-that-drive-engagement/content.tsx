"use client";

import { BlogPost } from "../../components/BlogPost";
import { default as MdxContent, metadata } from "./content.mdx";

export function Content() {
  return (
    <BlogPost
      date={metadata.date}
      title={metadata.title}
      author={metadata.author}
      content={<MdxContent />}
    />
  );
}
