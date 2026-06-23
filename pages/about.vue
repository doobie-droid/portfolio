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
            Beyond shipping code, I care about building products end-to-end — from backend architecture to the
            interfaces people actually touch — and most recently earned my <span
                class="text-primary dark:text-yellow-400">ServiceNow Certified System Administrator (CSA)</span>
            certification, rounding out my experience with enterprise platforms alongside my web stack.
            <br><br>
        </p>

        <h2>Experience</h2>
        <div class="px-24">
            <ExperienceItemList :jobs="jobs" />
        </div>

        <h2>Beyond the Code</h2>
        <p class="font-mono text-xl font-extrabold max-w-3xl mx-auto">
            Long before I was debugging production systems, I was on debate stages arguing both sides of a motion in
            front of judges from across Africa and Southeast Asia. That competitive instinct — preparing rigorously,
            thinking on my feet, and staying composed under pressure — is the same instinct I bring to engineering
            problems today.
        </p>
        <div class="px-4 md:px-24 mt-11">
            <ol class="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8 text-left">
                <li v-for="achievement in debateAchievements" :key="achievement.title"
                    class="bg-gray-100 dark:bg-neutral-800 rounded-xl p-5">
                    <h3 class="font-mono text-lg font-bold text-primary dark:text-yellow-400">{{ achievement.title }}
                    </h3>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-2">{{ achievement.issued }}</p>
                    <p class="text-base">{{ achievement.description }}</p>
                </li>
            </ol>
        </div>

        <p class="font-mono text-xl font-extrabold max-w-3xl mx-auto mt-11">
            That same discipline shows up off the stage too — I've run a marathon, which, much like a long-running
            project, rewards patience, pacing, and showing up consistently when the work isn't exciting anymore.
        </p>
    </div>
</template>

<script>
import ExperienceItemList from '~/components/ExperienceItemList.vue';

export default {
    name: "About",
    setup() {
        useHead({
            title: 'Portfolio - About Me!',
            meta: [
                {
                    name: 'description',
                    content: 'This page is a short summary of the professional work history of Douglas Leslie!'
                },
                {
                    property: 'og:title',
                    content: 'About Me! - My Website'
                }
            ]
        })
        return {}
    },
    components: {
        ExperienceItemList,
    },
    data() {
        return {
            jobs: [
                {
                    company: 'Gloopro',
                    role: 'Senior Software Engineer',
                    duration: 'Apr 2025 - Present',
                    link: "https://gloo.pro/"
                },
                {
                    company: 'JackWestin',
                    role: 'Backend Developer',
                    duration: 'Apr 2023 - Apr 2025',
                    link: "https://jackwestin.com/"
                },
                {
                    company: 'TryFlok',
                    role: 'Junior Full Stack Developer - Team Lead (Backend)',
                    duration: 'Mar 2020 - Apr 2023',
                    link: "https://x.com/tryflok"
                },
            ],
            debateAchievements: [
                {
                    title: 'Overall Best Speaker and Finalist, Covenant University Invitational 2021',
                    issued: 'Covenant University, Apr 2021',
                    description: 'Overall Best Speaker at the 3rd Covenant University Invitational, hosting 20+ universities from Africa and Southeast Asia.'
                },
                {
                    title: 'Semi-Finalist, Covenant University Invitational Debate Championship',
                    issued: 'Jun 2019',
                    description: 'Semi-finalist at Covenant University’s annual Debate and Public Speaking competition, hosting 20+ universities across West Africa.'
                },
                {
                    title: 'Quarter Finalist, All Nigeria’s University Debating Championship',
                    issued: 'Nov 2018',
                    description: 'Quarter-finalist at a national British Parliamentary debate competition open to private and public universities in Nigeria.'
                },
            ]
        };
    },
};
</script>
