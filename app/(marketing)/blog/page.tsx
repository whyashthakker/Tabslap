"use client"

// import { readdirSync } from "fs";
// import { join } from "path";
import Image from "next/image";
import Link from "next/link";

import postData from "@/data/post-data";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";
import { BasicLayout } from "../_components/BasicLayout";

export default async function BlogPage() {
  // TODO gather metadata for all posts programatically
  // const postsDirectory = join(process.cwd(), "app/blog/post/");
  // const posts = readdirSync(postsDirectory);

  return (
    <BasicLayout>
      <Posts />
    </BasicLayout>
  );
}

function Posts() {
  const posts = postData;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h2 className="font-cal text-3xl tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              To keep up to date with the future of AI.
            </p>
          </div>
          <Button variant={"default"} className="mt-3 sm:mt-0"
            onClick={() => {
              posthog.capture("Blog Get the Course");
              }}
          >
            Get the Course
          </Button>
        </div>
          <div className="mt-5 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  {/* <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 font-cal text-lg leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/post/${post.file}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                    width={40}
                    height={40}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
