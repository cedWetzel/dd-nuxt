import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import { createLogger, format, transports } from "winston";

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().ddNuxt;
  const logger = createLogger({
    level: "info",
    format: format.json(),
    transports: [
      new transports.Http({
        host: options.host,
        path: `/api/v2/logs?dd-api-key=${options.apiKey}&ddsource=nodejs&service=${options.serviceName}`,
        ssl: true
      })
    ]
  });

  nuxtApp.hook('vue:error', (error, instance, info) => {
    logger.error({ error, stack: (error as Error).stack, date: new Date() });
  });
});

