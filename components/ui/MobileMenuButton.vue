<template>
    <button @click="$emit('toggle', $event)" :aria-expanded="String(expanded)" type="button" aria-controls="menu"
        class="group min-h-10 px-4 py-2 flex md:hidden items-center rounded-full bg-white/90 dark:bg-zinc-800/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <svg viewBox="0 0 8 6" aria-hidden="true"
            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </button>
</template>

<script>
export default {
    name: 'MobileMenuButton',
    props: {
        expanded: {
            type: Boolean,
            default: false,
        },
    },
}
</script>