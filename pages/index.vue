<template>
    <div class="min-h-screen flex flex-col gap-20">
        <!-- Hero -->
        <section class="text-center max-w-3xl mx-auto">
            <h1 class="mb-4">Douglas Leslie</h1>
            <p class="text-xl">
                Software Engineer in Lagos, Nigeria, building <span
                    class="text-primary dark:text-yellow-400 font-bold">Learning Management</span> and <span
                    class="text-primary dark:text-yellow-400 font-bold">Content Management Systems</span>
                since 2020 — with backend, frontend, and DevOps in one toolkit.
            </p>
            <div class="flex flex-wrap justify-center gap-3 mt-6">
                <NuxtLink to="/project"
                    class="px-5 py-3 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                    View Projects
                </NuxtLink>
                <NuxtLink to="/resume"
                    class="px-5 py-3 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    View Resume
                </NuxtLink>
            </div>
        </section>

        <!-- Main tech -->
        <section class="max-w-4xl mx-auto w-full text-center">
            <h2>What I Build With</h2>
            <ul class="flex flex-wrap justify-center gap-3">
                <li v-for="tech in mainTechStack" :key="tech"
                    class="px-4 py-2 text-sm font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                    {{ tech }}
                </li>
            </ul>
        </section>

        <!-- Featured projects -->
        <section class="max-w-5xl mx-auto w-full">
            <h2 class="text-center">Featured Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 [perspective:1200px]">
                <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
            </div>
            <div class="text-center mt-8">
                <NuxtLink to="/project" class="link">See all projects →</NuxtLink>
            </div>
        </section>
    </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';
import projects from '~/data/projects.json';

export default {
    name: "Home",
    components: {
        ProjectCard
    },
    setup() {
        useHead({
            title: 'Portfolio - Home 🏠',
            meta: [
                {
                    name: 'description',
                    content: 'Douglas Leslie is a Software Engineer building Learning Management and Content Management Systems, with experience across PHP/Laravel, Nuxt/Vue, and Golang.'
                },
            ]
        })
        return {}
    },
    data() {
        return {
            mainTechStack: ['PHP/Laravel', 'Nuxt/Vue', 'Golang', 'MySQL', 'Docker', 'Kubernetes', 'TailwindCSS'],
        };
    },
    computed: {
        featuredProjects() {
            return projects.filter((project) => project.featured);
        },
    },
};
</script>
