"use client";
import React from "react";
import toolData from "./tools-data";
import { BasicLayout } from "@/app/(marketing)/_components/BasicLayout";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <BasicLayout>
      <Tools />
    </BasicLayout>
  );
}

function Tools() {
  const tools = toolData;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col justify-between items-center">
            <div>
              <h2 className="font-cal text-3xl tracking-tight text-gray-900 sm:text-4xl">
                Our Tools
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Enhance your content creation with our powerful tools.
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 font-cal text-lg leading-6 text-gray-900 group-hover:text-gray-600">
                    {tool.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}