<template>
    <NuxtLink :to="to" :class="linkClasses">
        <slot />
    </NuxtLink>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        linkClasses() {
            return [
                'relative block px-3 py-2 transition hover:text-primary_hover dark:hover:text-yellow-400',
                this.customClass
            ].join(' ')
        }
    }
}
</script>