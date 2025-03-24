<template>
    <div class=" bg-gray-100 dark:bg-black min-h-screen flex justify-center ">


        <div class="bg-white  dark:bg-neutral-900  dark:text-white w-full sm:w-[80%] ">
            <div class="flex justify-between px-4 sm:px-20 pt-5 ">
                <div
                    class="px-3 py-2 font-mono text-md font-semibold text-zinc-80  hover:text-[#00843D] dark:hover:text-yellow-400">
                    <a href="/" aria-label="Home">Home</a>
                </div>
                <nav class="hidden md:block mx-1">
                    <ul
                        class="flex font-mono text-md font-semibold text-zinc-800 ring-1 ring-zinc-900/5   shadow-2xl shadow-black/4 dark:ring-white/10 dark:bg-zinc-800/90 dark:text-zinc-200  dark:shadow-xl dark:shadow-white/5 px-3 rounded-full bg-white/90 ">

                        <li>
                            <NuxtLink to="/about"
                                class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                                About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/project"
                                class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                                Projects</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/open-source"
                                class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                                <span class="hidden lg:block">Open Source</span>
                                <span class="block lg:hidden">OSS</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog"
                                class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                                Blog</NuxtLink>
                        </li>
                    </ul>
                </nav>

                <!--  text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 -->

                <div class="flex gap-2 items-start">
                    <button aria-expanded="false" type="button"
                        class="group min-h-10 px-4 py-2 flex md:hidden items-center rounded-full bg-white/90 dark:bg-zinc-800/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5  ring-1 ring-zinc-900/5    dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20  ">Menu<svg
                            viewBox="0 0 8 6" aria-hidden="true"
                            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button>
                    <button type="button" aria-label="Toggle dark mode"
                        class=" px-3 group py-2 cursor-pointer rounded-full bg-white/90 ring-1 ring-black/10 hover:ring-black/20 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20  "
                        @click="toggleDarkMode">
                        <svg class="h-6 w-6 dark:hidden fill-teal-50 stroke-yellow-400 group-hover:fill-teal-50 group-hover:stroke-yellow-500"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg class="h-6 w-6 hidden dark:block fill-zinc-700 stroke-zinc-500 group-hover:stroke-zinc-400 transition duration-150"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toggleDarkMode() {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.toggle("dark");
            localStorage.setItem("theme", isDarkMode ? "dark" : "light")
        },
    },
};
</script>