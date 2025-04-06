<template>
    <div class="min-h-screen">
        <div class="pl-20">

        </div>
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
                    content: 'This page is contains details of write-ups of Douglas Leslie across several platforms i.e. Medium'
                },
            ]
        })
        return {}
    },
};
</script>
