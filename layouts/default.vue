<template>
    <div class=" bg-gray-100 dark:bg-black min-h-screen flex justify-center ">
        <div class="bg-white  dark:bg-neutral-900  dark:text-white w-full sm:w-[80%] ">
            <!-- Header / Navbar -->
            <header class="flex justify-between px-4 sm:px-20 pt-5 sticky top-0 ">
                <!-- Logo / Home -->
                <div
                    class="px-3 py-2 font-mono text-md font-semibold text-zinc-80  hover:text-[#00843D] dark:hover:text-yellow-400">
                    <a href="/" aria-label="Home">Home</a>
                </div>
                <!-- Desktop Navigation -->
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
                    <button type="button" aria-label="Toggle dark mode"
                        class=" px-3 group py-2 cursor-pointer rounded-full bg-white/90 ring-1 ring-black/10 hover:ring-black/20 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20  "
                        @click="toggleDarkMode">
                        <!-- Light Icon -->
                        <svg class="h-6 w-6 dark:hidden fill-teal-50 stroke-yellow-400 group-hover:fill-teal-50 group-hover:stroke-yellow-500"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <!-- Dark Icon -->
                        <svg class="h-6 w-6 hidden dark:block fill-zinc-700 stroke-zinc-500 group-hover:stroke-zinc-400 transition duration-150"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

            </header>
            <!-- Main content will be injected here -->
            <main>
                <NuxtPage />
            </main>

            <footer
                class="  pt-40 px-24 pb-14 font-extrabold font-mono flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-2 justify-center items-center">
                <div class="flex gap-2  ">
                    <NuxtLink to="/about"
                        class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                        About</NuxtLink>
                    <NuxtLink to="/project"
                        class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                        Projects</NuxtLink>
                    <NuxtLink to="/open-source"
                        class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                        <span class="hidden lg:block">Open Source</span>
                        <span class="block lg:hidden">OSS</span>
                    </NuxtLink>
                    <NuxtLink to="/blog"
                        class="relative block px-3 py-2 transition hover:text-[#00843D] dark:hover:text-yellow-400">
                        Blog</NuxtLink>
                </div>
                <div class="  flex items-center  text-center text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                    © 2023-{{ new Date().getFullYear() }} Doobie. All rights reserved.
                </div>
                <div class="flex gap-3">
                    <a class="h-8 w-8 block text-zinc-400  hover:text-[#00843D] dark:hover:text-yellow-400 transition"
                        aria-label="Medium Link" href="https://medium.com/@doobie-droid">
                        <svg fill="currentcolor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>Medium</title>
                            <path
                                d="M30.955 16c0 3.951-0.661 7.166-1.483 7.166s-1.483-3.215-1.483-7.166 0.661-7.166 1.483-7.166 1.483 3.215 1.483 7.166zM27.167 16c0 4.412-1.882 8.001-4.212 8.001s-4.225-3.589-4.225-8.001 1.894-8.001 4.225-8.001 4.212 3.589 4.212 8.001zM17.919 16c-0.014 4.67-3.803 8.45-8.475 8.45-4.68 0-8.475-3.794-8.475-8.475s3.794-8.475 8.475-8.475c2.351 0 4.479 0.957 6.014 2.504l0.001 0.001c1.521 1.531 2.46 3.641 2.46 5.97 0 0.009 0 0.018-0 0.026v-0.001z">
                            </path>
                        </svg>
                    </a>
                    <a class="h-8 w-8 block text-zinc-400  hover:text-[#00843D] dark:hover:text-yellow-400 transition"
                        aria-label="Contact By Mail" href="mailto:lesliedouglas23@gmail.com">
                        <svg viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                            <title>Email</title>
                            <path
                                d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a class="h-8 w-8 block text-zinc-400   hover:text-[#00843D] dark:hover:text-yellow-400 transition"
                        aria-label="Check out Github" href="https://github.com/doobie-droid">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">

                            <title>Github</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                    fill="currentcolor">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path
                                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a class="h-8 w-8 block text-zinc-400  hover:text-[#00843D] dark:hover:text-yellow-400 transition"
                        aria-label="Gitlab" href="https://gitlab.com/doobie-droid">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>GitLab</title>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.45344 3.3395C5.70395 3.11818 6.02498 3 6.35252 3C6.68005 3 7.00108 3.11818 7.2516 3.3395C7.25863 3.34571 7.26557 3.35202 7.27243 3.35843C7.43524 3.51064 7.55906 3.70268 7.6293 3.91856L9.16251 8.47062C9.29953 8.87744 9.68091 9.15142 10.1102 9.15142H13.8549C14.2845 9.15142 14.6661 8.87706 14.8029 8.46985L16.339 3.89696C16.345 3.87917 16.3515 3.86155 16.3584 3.84412C16.4373 3.6469 16.5615 3.47351 16.7184 3.33626C16.9684 3.11703 17.2879 3 17.6138 3C17.9414 3 18.2624 3.11818 18.5129 3.3395C18.5199 3.34571 18.5269 3.35202 18.5337 3.35843C18.6967 3.51075 18.8206 3.70295 18.8908 3.91902L20.8808 9.84304L21.9167 12.8095C21.9215 12.8232 21.926 12.837 21.9302 12.8509C22.0356 13.2009 22.0212 13.5751 21.8901 13.9158C21.7631 14.2456 21.5352 14.5224 21.2447 14.7122L13.7084 20.0097C12.6733 20.7372 11.293 20.7372 10.258 20.0097L2.7047 14.7003L2.70013 14.6971C2.41336 14.4931 2.195 14.2024 2.08286 13.8625C1.97101 13.5236 1.97246 13.1582 2.08682 12.8202L3.08366 9.83299L5.07768 3.89696C5.08366 3.87917 5.09014 3.86155 5.09711 3.84412C5.17596 3.64691 5.30022 3.47351 5.45712 3.33626L5.45344 3.3395Z"
                                fill="currentcolor" />
                        </svg>
                    </a>
                    <a class="h-8 w-8 block text-zinc-400   hover:text-[#00843D] dark:hover:text-yellow-400 transition"
                        aria-label="Linkedin" href="https://gitlab.com/doobie-droid">

                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>LinkedIn</title>
                            <path
                                d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                                fill="currentcolor" />
                            <path
                                d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                                fill="currentcolor" />
                            <path
                                d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                                fill="currentcolor" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                                fill="currentcolor" />
                        </svg>
                    </a>
                </div>

            </footer>
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