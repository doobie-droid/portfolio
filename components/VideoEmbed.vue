<template>
    <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900">
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
};
</script>
