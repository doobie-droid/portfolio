<template>
    <div class="bg-white dark:bg-black min-h-screen flex justify-center">
        <div class="dark:bg-neutral-900 dark:text-white w-full sm:w-[80%] flex justify-between px-4 sm:px-20 pt-5">
            <div><a href="/" aria-label="Home">Home</a> </div>
            <div>
                <NuxtLink to="/about" class="hover:underline text-primary-200 bg-primary text-pr">About</NuxtLink>
                <NuxtLink to="/project" class="text-blue-500 hover:underline">Projects</NuxtLink>
                <NuxtLink to="/open-source" class="text-blue-500 hover:underline">Open Source</NuxtLink>
                <NuxtLink to="/blog" class="text-blue-500 hover:underline">Blog</NuxtLink>
            </div>
            <div>
                <button type="button" aria-label="Toggle dark mode" class="bg-blue-400 cursor-pointer"
                    @click="toggleDarkMode">
                    <div class="h-4 w-4 bg-blue-50">d</div>
                    <div class="h-4 w-4 bg-green-700">l</div>

                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // data() {
    //     return {
    //         message: "Hello, Nuxt!",
    //     };
    // },
    methods: {
        toggleDarkMode() {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.toggle("dark");
            // alert(isDarkMode)
        },
    },
};
</script>