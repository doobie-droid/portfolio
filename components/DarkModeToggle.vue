<template>
    <button type="button" aria-label="Toggle dark mode"
        class=" px-3 group py-2 cursor-pointer rounded-full bg-white/90 ring-1 ring-black/10 hover:ring-black/20 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20  "
        @click="toggleDarkMode">
            <IconLightMode />
            <IconDarkMode/>   
    </button>
  </template>

<script>
import IconLightMode from './icons/IconLightMode.vue';
import IconDarkMode from './icons/IconDarkMode.vue';F
  export default {
    name: "DarkModeToggle",
    components: {
        IconLightMode,
        IconDarkMode
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
  