<template>
    <div class="min-h-screen">
        Redirecting...
    </div>

</template>

<script>
export default {
    name: "Home",
    setup() {
        useHead({
            title: 'Portfolio - Home 🏠',
        })
        return {}
    },
    mounted() {
        this.$router.replace("/about");
    },
};
</script>