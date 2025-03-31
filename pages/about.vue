<template>
    <div class="min-h-screen text-center">
        <h1>About</h1>
        <p class="font-mono text-xl font-extrabold">I am <span class="text-primary dark:text-yellow-400">Douglas
                Leslie</span>,
            Software Engineer living
            in Lagos,
            Nigeria.
            Since 2020, I've been dedicated to software development with a strong focus on building Learning Management
            and Content Management Systems.
            <br><br>
            I am an active open source contributor within the <span class="text-primary dark:text-yellow-400">PHP
                & Laravel</span> and the <span class="text-primary dark:text-yellow-400">Golang </span>Community.
            <br><br>
            I am currently bootstrapping a startup called <a href="https://leisuretrove.com/" target="_blank"
                class="link">Leisure
                Trove.</a>Our
            solution makes it easy for
            people to share
            and connect over shared experiences.
        </p>
        <h2>Experience</h2>
        <div>
            <ExperienceList :jobs="jobs" />
        </div>
    </div>
</template>

<script>
import ExperienceList from '~/components/ExperienceList.vue';

export default {
    name: "About",
    components: {
        ExperienceList,
    },
    data() {
        return {
            jobs: [
                {
                    company: 'JackWestin',
                    role: 'Backend Engineer',
                    duration: 'May 2023 - Jan 2025',
                    link: "https://jackwestin.com/"
                },
                {
                    company: 'TryFlok',
                    role: 'Backend Engineer (Team Lead)',
                    duration: 'Mar 2022 - Apr 2023',
                    link: "https://x.com/tryflok"
                },
                {
                    company: 'AMIS Group',
                    role: 'Full Stack Developer (Junior)',
                    duration: 'Mar 2020 - Jan 2022',
                    link: "https://ashmerlynintsch.com/"
                }
            ]
        };
    },
};
</script>