<template>
    <div>
        <div ref="card" role="button" tabindex="0" :aria-label="`View details for ${project.name}`"
            aria-haspopup="dialog" @click="openModal" @keydown.enter.prevent="openModal"
            @keydown.space.prevent="openModal"
            class="project-card relative flex flex-col gap-4 bg-gray-100 dark:bg-neutral-800 rounded-xl p-5 md:p-6 shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-primary dark:focus-visible:outline-yellow-400">
            <div class="pointer-events-none">
                <ScreenshotGallery :screenshots="project.screenshots" :projectName="project.name" />
            </div>

            <div>
                <h3 class="font-mono text-xl md:text-2xl font-bold text-black dark:text-white">
                    {{ project.name }}
                </h3>
                <p class="mt-2 text-base">{{ project.summary }}</p>
            </div>

            <ul class="flex flex-wrap gap-2">
                <li v-for="tech in project.techStack" :key="tech"
                    class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                    {{ tech }}
                </li>
            </ul>

            <div class="flex flex-wrap gap-3 mt-auto pt-2">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                    View Live
                </a>
                <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    View Code
                </a>
                <a v-if="project.demoVideoUrl" :href="project.demoVideoUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    Watch Demo
                </a>
            </div>
        </div>

        <ProjectModal :open="isModalOpen" :project="project" @close="closeModal" />
    </div>
</template>

<script>
import ScreenshotGallery from "~/components/ScreenshotGallery.vue";
import ProjectModal from "~/components/ProjectModal.vue";

export default {
    name: "ProjectCard",
    components: {
        ScreenshotGallery,
        ProjectModal,
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isModalOpen: false,
        };
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>

<style scoped>
.project-card {
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    transform-style: preserve-3d;
    will-change: transform;
}

@media (hover: hover) and (pointer: fine) {
    .project-card:hover {
        transform: scale(1.04) rotateY(6deg) rotateX(2deg);
        box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.25);
        z-index: 1;
    }
}

.project-card:focus-visible {
    transform: scale(1.02);
}

@media (prefers-reduced-motion: reduce) {
    .project-card {
        transition: none;
    }

    .project-card:hover,
    .project-card:focus-visible {
        transform: none;
    }
}
</style>
