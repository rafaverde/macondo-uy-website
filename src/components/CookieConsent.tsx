"use client";

import Script from "next/script";

export function CookieConsent() {
  const cookieBotId = process.env.NEXT_PUBLIC_COOKIEBOT_ID;

  if (process.env.NODE_ENV !== "production" || !cookieBotId) {
    return null;
  }

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={cookieBotId}
      data-blockingmode="auto"
      type="text/javascript"
    />
  );
}
