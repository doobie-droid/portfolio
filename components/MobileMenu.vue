<template>
    <div id="menu"
        class="fixed top-8 inset-x-4 bg-white dark:bg-zinc-900 p-8 rounded-3xl ring-1 ring-zinc-900/5 dark:ring-zinc-800 transition duration-300 ease-in-out transform"
        :class="{
            'opacity-0 pointer-events-none': isHidden,
            'opacity-100 pointer-events-auto': !isHidden
        }" tabindex="-1" @click.stop>
        <div class="flex justify-between items-center">
            <h2 class="my-0">Menu</h2>
            <button aria-label="Close Menu" type="button" aria-controls="menu" @click="$emit('close')">
                <IconClose />
            </button>
        </div>

        <nav class="mt-6">
            <ul
                class="dark:divide-zinc-100/5 dark:text-zinc-300 divide-y font-mono font-black divide-zinc-100 text-base text-zinc-800 -my-2">
                <li v-for="item in links" :key="item.to">
                    <NuxtLink class="py-2 block" :to="item.to" @click="$emit('toggle', $event)">{{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import IconClose from './icons/IconClose.vue';
export default {
    name: 'MobileMenu',
    components: {
        IconClose,
    },
    props: {
        isHidden: {
            type: Boolean,
            required: true
        },
        links: {
            type: Array,
            required: true,
        },
    }
}
</script>