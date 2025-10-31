import * as Sentry from "@sentry/react";

import { AppConfig } from "@/config/env.config.ts";

export const initSentry = () => {
  if (!AppConfig.IS_PRODUCTION || !AppConfig.SENTRY_DSN) return;

  Sentry.init({
    dsn: AppConfig.SENTRY_DSN,
    tracesSampleRate: 1.0,
    debug: AppConfig.IS_DEVELOPMENT,
    environment: AppConfig.CURRENT_ENV,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};

export { Sentry };
