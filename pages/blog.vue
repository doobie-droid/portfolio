<template>
    <div class="min-h-screen">
        <div class="px-10  ">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                <div v-for="post in postStore.getPosts" :key="post.id"
                    class="flex flex-col items-center bg-gray-200 dark:bg-neutral-800  rounded-xl p-3">
                    <div class="overflow-hidden h-64 w-full rounded-t-lg">
                        <img :src="post.cover_image" :alt="`${post.title} cover picture`"
                            class="w-full h-full object-cover transition-transform duration-300 hover:scale-125" />
                    </div>
                    <span
                        class="my-4 font-mono text-2xl text-center pointer hover:text-primary dark:hover:text-yellow-400 underline underline-offset-2">
                        <a :href="post.link">{{ post.title }}</a>
                    </span>
                    <span class="font-mono text-sm text-justify">{{ post.summary }}</span>
                    <div class="flex gap-2 my-4 w-full justify-center">
                        <span>Views: <em class="dark:text-yellow-400 text-primary">{{ post.view_count }}</em></span>
                        <span>Reads: <em class="dark:text-yellow-400 text-primary">{{ post.read_count }}</em></span>
                    </div>

                </div>
            </div>
            <button ref="loadMoreTrigger"></button>
            <LoadingDots v-if="isLoading" />
        </div>
    </div>
</template>

<script>
import { usePostStore } from '#imports';
import LoadingDots from '~/components/ui/LoadingDots.vue';

export default {
    name: "Blog",
    components: {
        LoadingDots
    },
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
            theObserver: null,
        }
    },
    mounted() {
        this.setupObserver();
    },
    unmounted() {
        this.removeObserver();

    },
    methods: {
        async fetchPosts() {
            this.isLoading = true
            await this.postStore.fetchPosts(this.pageNumber++)
            this.isLoading = false
        },
        setupObserver() {
            const trigger = this.$refs.loadMoreTrigger
            this.theObserver = new IntersectionObserver((entries) => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    this.fetchPosts()
                }
            });
            if (trigger) {
                this.theObserver.observe(trigger);
            }
        },
        removeObserver() {
            if (this.observer && this.$refs.loadMoreTrigger) {
                this.observer.unobserve(this.$refs.loadMoreTrigger)
            }
        }
    }
};
</script>
