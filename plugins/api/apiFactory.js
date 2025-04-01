import message from "~/core/api/message";

export default defineNuxtPlugin((nuxtApp) => {
  const { $axios } = nuxtApp;

  const apiFactory = {
    message: message($axios),
  };

  nuxtApp.provide("api", apiFactory);
});
