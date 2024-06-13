import clsx from "clsx";
import {
    AirVent,
  BarChart2Icon,
  Database,
  DollarSign,
  EyeIcon,
  LineChart,
  LucideIcon,
  MousePointer2Icon,
  Music2,
  Orbit,
  SmileIcon,
  Sparkles,
  Voicemail,
} from "lucide-react";
import Image from "next/image";

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-cal text-base leading-7 text-blue-600">
            Privacy first
          </h2>
          <p className="mt-2 font-cal text-3xl text-gray-900 sm:text-4xl">
            One Time Payment. No data is stored on our servers.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We do not store your data on our servers. All data is stored locally
            on your computer. We have no access to your API key, social media accounts 
            or emails.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesWithImage(props: {
  imageSide: "left" | "right";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: {
    name: string;
    description: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div
            className={clsx(
              "lg:pt-4",
              props.imageSide === "left"
                ? "lg:ml-auto lg:pl-4"
                : "lg:mr-auto lg:pr-4",
            )}
          >
            <div className="lg:max-w-lg">
              <h2 className="font-cal text-base leading-7 text-blue-600">
                {props.title}
              </h2>
              <p className="mt-2 font-cal text-3xl text-gray-900 sm:text-4xl">
                {props.subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {props.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {props.features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            className={clsx(
              "flex items-start",
              props.imageSide === "left"
                ? "justify-end lg:order-first"
                : "justify-start lg:order-last",
            )}
          >
            <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <Image
                src={props.image}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-2xl shadow-teal-500/50 ring-1 ring-gray-400/10 sm:w-[57rem]"
                width={2400}
                height={1800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featuresAutomations = [
  {
    name: "Pay once, use forever",
    description:
      "Tabslap is a one time payment. We hate subscriptions. But you will get lifetime updates.",
    icon: DollarSign,
  },
  {
    name: "Choose your AI Model",
    description:
      "Choose from GPT-3.5 or GPT-4 based on your needs.",
    icon: SmileIcon,
  },
  {
    name: "Connect with OpenAI API",
    description:
      "Connect your OpenAI API key and pay for what you use.",
    icon: AirVent,
  },
];

export function FeaturesAutomation() {
  return (
    <FeaturesWithImage
      imageSide="left"
      title="Your AI-Powered Second Brain"
      subtitle="Rocketship your engagement with Tabslap."
      description="Think of Tabslap as your AI-powered second brain. Generate comments, replies, virality scores and similar posts in seconds."
      image="/ai_main.png"
      features={featuresAutomations}
    />
  );
}

const featuresStats = [
  {
    name: "Post what works",
    description:
      "Understand why certain posts go viral and predict what will work and what won't in seconds.",
    icon: Sparkles,
  },
  {
    name: "Quality and Quantity",
    description:
      "Generate more quality in quantity.",
    icon: Database,
  },
  {
    name: "Learn with every post",
    description:
      "Learn why certain posts go viral and which ones don't and why.",
    icon: Orbit,
  },
];

export function FeaturesStats() {
  return (
    <FeaturesWithImage
      imageSide="right"
      title="Go Viral"
      subtitle="Predict what will work and what won't."
      description="Leverage the power of AI to predict what will go viral and what won't. Tabslap can generate virality scores for your and community posts."
      image="/ai_virality.png"
      features={featuresStats}
    />
  );
}

const featuresUnsubscribe = [
  {
    name: "Takes a few seconds",
    description:
      "Just select the post you want to comment on and generate a comment in seconds.",
    icon: MousePointer2Icon,
  },
  {
    name: "Use your own voice",
    description:
      "Customise your commenting style one time and Tabslap will use it to generate comments in your voice.",
    icon: Music2,
  },
  {
    name: "Learn from past comments",
    description:
      "Tabslap learns from your past comments and improves the quality of comments over time.",
    icon: BarChart2Icon,
  },
];

export function FeaturesUnsubscribe() {
  return (
    <FeaturesWithImage
      imageSide="left"
      title="AI Commenter"
      subtitle="AI-Powered Comments in your browser."
      description="Generate dynamic comments in seconds, and in your own voice!"
      image="/ai_comments.png"
      features={featuresUnsubscribe}
    />
  );
}
