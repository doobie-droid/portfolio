<template>
    <div class="flex flex-col gap-3">
        <VideoEmbed v-if="demoVideoUrl" :src="demoVideoUrl" :projectName="projectName" />
        <ScreenshotGallery v-if="!demoVideoUrl || screenshots.length" :screenshots="screenshots"
            :projectName="projectName" />
    </div>
</template>

<script>
import VideoEmbed from "~/components/VideoEmbed.vue";
import ScreenshotGallery from "~/components/ScreenshotGallery.vue";

export default {
    name: "ProjectMedia",
    components: {
        VideoEmbed,
        ScreenshotGallery,
    },
    props: {
        screenshots: {
            type: Array,
            default: () => [],
        },
        demoVideoUrl: {
            type: String,
            default: null,
        },
        projectName: {
            type: String,
            required: true,
        },
    },
};
</script>
