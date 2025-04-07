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
                class="  pt-40 px-24 pb-14 font-extrabold font-mono flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-2 justify-center items-center">
                <div class="flex gap-2  ">
                    <NavListItem v-for="item in navLinks" :key="item.to" :to="item.to">
                        {{ item.label }}
                    </NavListItem>
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
                { label: 'About', to: '/about' },
                { label: 'Projects', to: '/project' },
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