<template>
    <div>
        <div class="min-h-screen flex items-center justify-center">Blog Page</div>
        <div class="min-h-screen flex items-center justify-center">Center</div>
    </div>
</template>

<script>
export default {
    name: "Blog",
    setup() {
        useHead({
            title: 'Portfolio - Blog Entries',
            meta: [
                {
                    name: 'description',
                    content: 'This page is contains details of writeups of Douglas Leslie across several platforms i.e. Medium'
                },
            ]
        })
        return {}
    },
};
</script>
