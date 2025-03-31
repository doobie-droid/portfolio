<template>
    <div class=" bg-gray-100 dark:bg-black min-h-screen flex justify-center ">
        <div class="bg-white  dark:bg-neutral-900  dark:text-white w-full sm:w-[80%] ">
            <!-- Header / Navbar -->
            <header class="flex justify-between px-4 sm:px-20 pt-5 sticky top-0 ">
                <!-- Logo / Home -->
                <NavListItem to="/" :customClass="'text-md font-semibold'">Home</NavListItem>
                <!-- Desktop Navigation -->

                <nav class="hidden md:block mx-1">
                    <ul
                        class="flex font-mono text-md font-semibold text-zinc-800 ring-1 ring-zinc-900/5   shadow-2xl shadow-black/4 dark:ring-white/10 dark:bg-zinc-800/90 dark:text-zinc-200  dark:shadow-xl dark:shadow-white/5 px-3 rounded-full bg-white/90 ">

                        <li>
                            <NavListItem to="/about">About</NavListItem>
                        </li>
                        <li>
                            <NavListItem to="/project">Projects</NavListItem>
                        </li>
                        <li>
                            <NavListItem to="/open-source">
                                <span class="hidden lg:block">Open Source</span>
                                <span class="block lg:hidden">OSS</span>
                            </NavListItem>
                        </li>
                        <li>
                            <NavListItem to="/blog">Blog</NavListItem>
                        </li>
                    </ul>
                </nav>

                <!-- Mobile Menu + Theme Toggle -->
                <div class="flex gap-2 items-start">
                    <!-- Mobile Menu -->
                    <button aria-expanded="false" type="button"
                        class="group min-h-10 px-4 py-2 flex md:hidden items-center rounded-full bg-white/90 dark:bg-zinc-800/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5  ring-1 ring-zinc-900/5    dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20  ">Menu<svg
                            viewBox="0 0 8 6" aria-hidden="true"
                            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button>
                    <!-- Dark Mode Toggle -->
                    <DarkModeToggle />
                </div>

            </header>
            <!-- Main content will be injected here -->
            <main class="my-10 px-4">
                <NuxtPage />
            </main>

            <footer
                class="  pt-40 px-24 pb-14 font-extrabold font-mono flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-2 justify-center items-center">
                <div class="flex gap-2  ">
                    <NavListItem to="/about">About</NavListItem>
                    <NavListItem to="/project">Projects</NavListItem>
                    <NavListItem to="/open-source">
                        <span class="hidden lg:block">Open Source</span>
                        <span class="block lg:hidden">OSS</span>
                    </NavListItem>
                    <NavListItem to="/blog">Blog</NavListItem>

                </div>
                <div class="  flex items-center  text-center text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                    © 2023-{{ new Date().getFullYear() }} Doobie. All rights reserved.
                </div>

                <SocialLinkList />
            </footer>
        </div>
    </div>
</template>
<script>
import SocialLinkList from '~/components/SocialLinkList.vue';
import NavListItem from '~/components/NavListItem.vue';
import DarkModeToggle from '~/components/DarkModeToggle.vue';

export default {
    components: {
        SocialLinkList,
        NavListItem,
        DarkModeToggle,
    },
    methods: {
        toggleDarkMode() {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.toggle("dark");
            localStorage.setItem("theme", isDarkMode ? "dark" : "light")
        },
    },
};
</script>