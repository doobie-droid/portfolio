import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const usePostStore = defineStore("posts", {
  state: () => ({
    Posts: [],
    VisitedPages: {},
  }),
  getters: {
    getPosts: (state) => state.Posts,
  },
  actions: {
    async fetchPosts(pageNumber = 1) {
      const { $api } = useNuxtApp();
      const response = await $api.post.fetchPosts(pageNumber);
      if (!this.VisitedPages[pageNumber]) {
        this.Posts.push(...response.data);
      }
      this.VisitedPages[pageNumber] = true;
    },
  },
});
