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
                <div class="w-full md:w-1/2">
                    <EmailInput v-model:value="email" v-model:error="errors.email" />
                </div>
                <div class="w-full md:w-1/2">
                    <NameInput v-model:value="name" v-model:error="errors.name" />
                </div>
                <div class="w-full md:w-1/2">
                    <TextAreaInput v-model:value="message" v-model:error="errors.message" />
                </div>
                <SubmitButton />
            </form>
        </div>
    </div>
</template>

<script>
import ExperienceItemList from '~/components/ExperienceItemList.vue';
import EmailInput from '~/components/ui/EmailInput.vue';
import NameInput from '~/components/ui/NameInput.vue';
import TextAreaInput from '~/components/ui/TextAreaInput.vue';
import SubmitButton from '~/components/ui/SubmitButton.vue';

export default {
    name: "About",
    components: {
        ExperienceItemList,
        EmailInput,
        NameInput,
        TextAreaInput,
        SubmitButton,
    },
    data() {
        return {
            email: "",
            name: "",
            message: "",
            errors: {
                email: "",
                name: "",
                message: ""
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
