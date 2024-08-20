// app/posthog.js
import { PostHog } from "posthog-node";

function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
  return posthogClient;
}

const analyticsServerClient = PostHogClient();

export default analyticsServerClient;
