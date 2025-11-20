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
import { useMessageStore } from '#imports';

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
        EmailInput,
        NameInput,
        TextAreaInput,
        SubmitButton,
    },
    data() {
        return {
            messageStore: useMessageStore(),
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
            ]
        };
    },
    methods: {
        async onSubmitClicked() {
            const payload = {
                email: this.email,
                name: this.name,
                content: this.message,

            }
            await this.messageStore.SearchPhotos(payload);
            alert("Thank you for contacting me")
            location.reload();
        }
    }
};
</script>
