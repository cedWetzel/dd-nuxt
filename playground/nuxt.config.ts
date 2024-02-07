export default defineNuxtConfig({
  modules: ["../src/module"],
  ddNuxt: {
    host: "http-intake.logs.us5.datadoghq.com",
    apiKey: "testop",
    serviceName: "marketing-website",
  },

  devtools: { enabled: true }
});
