<template>
    <div class="min-h-screen">
        <div class="pl-20">
            <div v-for="post in postStore.getPosts" :key="post.id">
                {{ post.title }}
            </div>

            <button @click="fetchPosts">Fetch More Posts</button>
            <div v-if="isLoading" class="loading">Loading more posts...</div>
        </div>
    </div>
</template>

<script>
import { usePostStore } from '#imports';

export default {
    name: "Blog",
    setup() {
        useHead({
            title: 'Portfolio - Blog Entries',
            meta: [
                {
                    name: 'description',
                    content: 'This page is contains details of write-ups of Douglas Leslie across several platforms i.e. Medium'
                },
            ]
        })
        return {}
    },
    data() {
        return {
            postStore: usePostStore(),
            pageNumber: 1,
            isLoading: false,
        }
    },
    async mounted() {
        await this.postStore.fetchPosts(this.pageNumber);
    },
    methods: {
        async fetchPosts() {
            this.isLoading = true
            await this.postStore.fetchPosts(++this.pageNumber)
            this.isLoading = false
        },
    }
};
</script>
