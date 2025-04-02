<template>
    <div>
        <div class="min-h-screen flex items-center justify-center">Index Page</div>
        <div class="min-h-screen flex items-center justify-center">Center</div>
    </div>

</template>

<script>
export default {
    name: "Home",
    setup() {
        useHead({
            title: 'Home 🏠',
        })
        return {}
    },
    mounted() {
        this.$router.replace("/about");
    },
};
</script>