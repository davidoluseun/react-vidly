import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function logInit() {
  Sentry.init({
    dsn:
      "https://850d711f95ae46fabb0521b51837b248@o494447.ingest.sentry.io/5573189",
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  logInit,
  log,
};

export default logger;
