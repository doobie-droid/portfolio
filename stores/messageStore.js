import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useMessageStore = defineStore("messages", {
  state: () => ({
    Messages: {},
  }),
  getters: {
    GetMessages: (state) => state.Messages,
  },
  actions: {
    async SearchPhotos(payload) {
      const { $api } = useNuxtApp();
      await $api.message.CreateMessage(payload);
    },
  },
});
