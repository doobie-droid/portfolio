<template>
    <!-- TODO -->
    <!-- Create a pretty pop-up For the contact form -->
    <!-- Show that the contact form is loading when someone contacts you -->
    <!-- Put moving eyes on your picture on the homepage and use three.js rendering-->

    <div class=" bg-gray-100 dark:bg-black min-h-screen flex justify-center ">
        <Overlay :isHidden="isHidden">
            <MobileMenu :isHidden="isHidden" @close="isHidden = true" :links="navLinks" @toggle="toggleMenu" />
        </Overlay>
        <div class="bg-white  dark:bg-neutral-900  dark:text-white w-full sm:w-[80%] ">

            <header
                class="flex justify-between px-4 md:px-12 lg:px-20 pt-5 sticky top-0 z-10 bg-white dark:bg-neutral-900 pb-5">

                <NavListItem to="/" :customClass="'text-md font-semibold'">Home</NavListItem>

                <DesktopMenu :links="navLinks" />

                <div class="flex gap-2 items-start">
                    <MobileMenuButton :expanded="!isHidden" @toggle="toggleMenu" />
                    <DarkModeToggle />
                </div>

            </header>

            <!-- Main content will be injected here -->
            <main class="my-10 px-4">
                <NuxtPage />
            </main>

            <footer
                class="mt-24 border-t border-zinc-200 dark:border-zinc-800 px-6 md:px-12 lg:px-20 pt-10 pb-10 font-mono flex flex-col items-center gap-6">
                <nav class="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                    <template v-for="(item, index) in navLinks" :key="item.to">
                        <NavListItem :to="item.to">{{ item.label }}</NavListItem>
                        <span v-if="index < navLinks.length - 1" class="self-center text-zinc-300 dark:text-zinc-700"
                            aria-hidden="true">•</span>
                    </template>
                </nav>

                <SocialLinkList />

                <p class="text-xs text-zinc-400 dark:text-zinc-500">
                    © 2023–{{ new Date().getFullYear() }} Douglas Leslie. All rights reserved.
                </p>
            </footer>
        </div>
    </div>
</template>
<script>
import SocialLinkList from '~/components/SocialLinkList.vue';
import NavListItem from '~/components/NavListItem.vue';
import DarkModeToggle from '~/components/DarkModeToggle.vue';
import IconClose from '~/components/icons/IconClose.vue';
import Overlay from '~/components/Overlay.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import DesktopMenu from '~/components/DesktopMenu.vue';
import MobileMenuButton from '~/components/ui/MobileMenuButton.vue';
export default {
    components: {
        SocialLinkList,
        NavListItem,
        DarkModeToggle,
        IconClose,
        Overlay,
        MobileMenu,
        DesktopMenu,
        MobileMenuButton,
    },
    data() {
        return {
            isHidden: true,
            navLinks: [
                { label: 'Projects', to: '/project' },
                { label: 'About', to: '/about' },
                { label: 'Resume', to: '/resume' },
                // { label: 'Open Source', to: '/open-source' },
                { label: 'Blog', to: '/blog' },
            ],
        };
    },
    methods: {
        toggleMenu(event) {
            const menuButton = event.target;
            this.isHidden = !this.isHidden
            menuButton.setAttribute('aria-expanded', String(this.isHidden))
        },
    }
};
</script>