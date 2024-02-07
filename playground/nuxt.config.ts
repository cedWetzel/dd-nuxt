export default defineNuxtConfig({
  modules: ["../src/module"],
  ddNuxt: {
    host: "http-intake.logs.us5.datadoghq.com",
    apiKey: "test",
    serviceName: "marketing-website",
  },
  devtools: { enabled: true },
});
