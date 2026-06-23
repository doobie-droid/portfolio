<template>
    <div class="grid gap-2" :class="screenshots.length > 1 ? 'grid-cols-2' : 'grid-cols-1'">
        <img v-for="(src, index) in displayShots" :key="index" :src="src" loading="lazy"
            :alt="`${projectName} screenshot ${index + 1}`"
            class="w-full h-48 object-cover rounded-lg border border-zinc-200 dark:border-zinc-700" />
    </div>
</template>

<script>
export default {
    name: "ScreenshotGallery",
    props: {
        screenshots: {
            type: Array,
            default: () => [],
        },
        projectName: {
            type: String,
            required: true,
        },
    },
    computed: {
        displayShots() {
            return this.screenshots.length ? this.screenshots : ["/images/projects/placeholder.svg"];
        },
    },
};
</script>
