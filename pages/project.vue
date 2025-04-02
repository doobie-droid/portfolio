<template>
    <div class="min-h-screen ">
        <ol>
            <!-- <li>Faru</li> -->
            <li>Leisure Trove</li>
            <li>Job Scraper</li>
            <li>Node server </li>
            <li>Unsplash Clone</li>
            <li>Product Management App</li>
            <li>Project Management App</li>
            <li>Appointment Management App</li>
        </ol>

    </div>
</template>

<script>
export default {
    name: "Projects",
    setup() {
        useHead({
            title: 'Projects',
            meta: [
                {
                    name: 'description',
                    content: 'This page contains details of web applications or cli tools bootstrapped by me.'
                },
            ]
        })
        return {}
    },
};
</script>