<template>
    <div class="min-h-screen">
        <div class="px-10">
            <div v-for="post in postStore.getPosts" :key="post.id" class="min-h-screen bg-green-200">
                {{ post.title }}
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
