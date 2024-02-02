"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// based on: https://posthog.com/docs/libraries/next-js

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    // https://posthog.com/docs/advanced/proxy/nextjs
    api_host: `${window.location.origin}/ingest`,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function PostHogPageview(): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <></>;
}

// export function PostHogIdentify(): JSX.Element {
//   const session = useSession();

//   useEffect(() => {
//     if (session?.data?.user.email) posthog.identify(session?.data?.user.email);
//   }, [session?.data?.user.email]);

//   return <></>;
// }

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
