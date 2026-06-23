<template>
    <div class="min-h-screen">
        <h1 class="text-center">Projects</h1>
        <p class="text-center max-w-2xl mx-auto">
            A selection of products, tools, and contract work I've designed and built end-to-end.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';
import projects from '~/data/projects.json';

export default {
    name: "Projects",
    components: {
        ProjectCard,
    },
    setup() {
        useHead({
            title: 'Portfolio - Projects',
            meta: [
                {
                    name: 'description',
                    content: 'This page contains details of web applications or cli tools bootstrapped by me.'
                },
            ]
        })
        return {}
    },
    data() {
        return {
            projects,
        };
    }
};
</script>
