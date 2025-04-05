<template>
    <div class="min-h-screen">
        This is the end
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
