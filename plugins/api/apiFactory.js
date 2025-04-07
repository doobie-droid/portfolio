import message from "~/core/api/message";
import post from "~/core/api/post";

export default defineNuxtPlugin((nuxtApp) => {
  const { $axios } = nuxtApp;

  const apiFactory = {
    message: message($axios),
    post: post($axios),
  };

  nuxtApp.provide("api", apiFactory);
});
