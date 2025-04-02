<template>
    <div class="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md md:hidden flex transition-opacity duration-300"
        :class="{
            'opacity-0 pointer-events-none': isHidden,
            'opacity-100 pointer-events-auto': !isHidden
        }" aria-hidden="false" @click="$emit('update:modelValue', true)">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Overlay',
    props: {
        isHidden: {
            type: Boolean,
            required: true
        }
    }
}
</script>