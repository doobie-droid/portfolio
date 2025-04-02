<template>
    <nav class="hidden md:block mx-1">
        <ul
            class="flex font-mono text-md font-semibold text-zinc-800 ring-1 ring-zinc-900/5 shadow-2xl shadow-black/4 dark:ring-white/10 dark:bg-zinc-800/90 dark:text-zinc-200 dark:shadow-xl dark:shadow-white/5 px-3 rounded-full bg-white/90">
            <li v-for="item in links" :key="item.to">

                <NavListItem :to="item.to">{{ item.label }}</NavListItem>
            </li>

        </ul>
    </nav>
</template>

<script>
import NavListItem from '@/components/NavListItem.vue'

export default {
    name: 'DesktopMenu',
    components: {
        NavListItem
    },
    props: {
        links: {
            type: Array,
            required: true,
        },
    }
}
</script>