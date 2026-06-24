<template>
    <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900">
        <img v-if="isAnimatedImage" :src="src" :alt="`${projectName} demo`" loading="lazy"
            class="w-full h-full object-cover" />

        <video v-else-if="isLocalVideo" :src="src" :title="`${projectName} demo video`" autoplay loop muted
            playsinline preload="metadata" class="w-full h-full object-cover"></video>

        <template v-else>
            <button v-if="!isPlaying" type="button" @click="isPlaying = true"
                :aria-label="`Play demo video for ${projectName}`"
                class="absolute inset-0 flex items-center justify-center w-full h-full group">
                <img src="/images/projects/placeholder.svg" :alt="`${projectName} demo video preview`"
                    loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-60" />
                <span
                    class="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary dark:bg-yellow-400 text-white dark:text-black group-hover:scale-110 transition-transform">
                    ▶
                </span>
            </button>
            <iframe v-else :src="src" :title="`${projectName} demo video`" loading="lazy" allowfullscreen
                class="w-full h-full" frameborder="0"></iframe>
        </template>
    </div>
</template>

<script>
export default {
    name: "VideoEmbed",
    props: {
        src: {
            type: String,
            required: true,
        },
        projectName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isPlaying: false,
        };
    },
    computed: {
        isAnimatedImage() {
            return /\.(gif|webp)$/i.test(this.src);
        },
        isLocalVideo() {
            return /\.(mp4|webm)$/i.test(this.src);
        },
    },
};
</script>
