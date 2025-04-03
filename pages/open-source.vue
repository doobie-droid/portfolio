<template>
    <div>
        <div class="min-h-screen flex items-center justify-center">Open Source Page</div>
        <div class="min-h-screen flex items-center justify-center">Center</div>
    </div>
</template>

<script>
export default {
    name: "Open Source",
    setup() {
        useHead({
            title: 'Portfolio - Open Source',
            meta: [
                {
                    name: 'description',
                    content: 'This page contains details of my contributions to open source across laravel/php and golang'
                },
            ]
        })
        return {}
    },
};
</script>