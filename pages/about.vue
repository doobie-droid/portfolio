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
                Trove.</a> Our
            solution makes it easy for
            people to share
            and connect over shared experiences.
        </p>
        <h2>Experience</h2>
        <div class="px-24">
            <ExperienceItemList :jobs="jobs" />
        </div>
        <h2>Contact Me</h2>
        <div>

            <form @submit.prevent="onSubmitClicked" class=" flex flex-col items-center gap-8">
                <EmailInput v-model:value="email" v-model:error="errors.email" />
                <NameInput v-model:value="name" v-model:error="errors.name" />
                <button type="submit"
                    class=" p-3 w-full md:w-1/6  border border-primary-500 rounded-md bg-green-400 dark:bg-yellow-300 text-black tracking-wide font-extrabold outline-none dark:outline-none  hover:bg-primary hover:dark:bg-yellow-400 focus:outline-none shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl active:translate-y-1 active:bg-primary-400">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import ExperienceItemList from '~/components/ExperienceItemList.vue';
import EmailInput from '~/components/ui/EmailInput.vue';
import NameInput from '~/components/ui/NameInput.vue';

export default {
    name: "About",
    components: {
        ExperienceItemList,
        EmailInput,
        NameInput
    },
    data() {
        return {
            email: "",
            name: "",
            errors: {
                email: "",
                name: ""
            },
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
    methods: {
        onSubmitClicked() {
            confirm("DO YOU WANT TO GO?")
        }
    }
};
</script>
