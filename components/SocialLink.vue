<template>
    <a :href="href" :aria-label="label" target="_blank" rel="noopener noreferrer"
        class="h-8 w-8 block text-zinc-400 hover:text-primary_hover dark:hover:text-yellow-400 transition">
        <slot />
    </a>
</template>

<script>
export default {
    name: "SocialLink",
    props: {
        href: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
};
</script>