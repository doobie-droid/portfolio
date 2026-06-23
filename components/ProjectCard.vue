<template>
    <article
        class="flex flex-col gap-4 bg-gray-100 dark:bg-neutral-800 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
        <ProjectMedia :screenshots="project.screenshots" :demoVideoUrl="project.demoVideoUrl"
            :projectName="project.name" />

        <div>
            <h3 class="font-mono text-xl md:text-2xl font-bold text-black dark:text-white">
                {{ project.name }}
            </h3>
            <p class="mt-2 text-base">{{ summaryText }}</p>
        </div>

        <ul class="flex flex-wrap gap-2">
            <li v-for="tech in project.techStack" :key="tech"
                class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                {{ tech }}
            </li>
        </ul>

        <div class="flex flex-wrap gap-3 mt-auto pt-2">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="px-4 py-2 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                View Live
            </a>
            <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer"
                class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                View Code
            </a>
            <a v-if="project.demoVideoUrl" :href="project.demoVideoUrl" target="_blank" rel="noopener noreferrer"
                class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                Watch Demo
            </a>
        </div>
    </article>
</template>

<script>
import ProjectMedia from "~/components/ProjectMedia.vue";

export default {
    name: "ProjectCard",
    components: {
        ProjectMedia,
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    computed: {
        summaryText() {
            return this.project.summary || this.project.bio;
        },
    },
};
</script>
