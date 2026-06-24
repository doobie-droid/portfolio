<template>
    <div class="pdf-viewer flex flex-col items-center justify-center w-full gap-4">
        <iframe :src="pdfUrl" title="Douglas Leslie's Resume PDF"
            class="w-full max-w-3xl h-[75vh] border border-black dark:border-white rounded-lg"></iframe>

        <div class="flex flex-wrap justify-center gap-3 mt-2">
            <a :href="pdfUrl" target="_blank" rel="noopener noreferrer"
                class="px-5 py-3 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                Open Resume in New Tab
            </a>
            <a :href="pdfUrl" target="_blank" rel="noopener noreferrer" download
                class="px-5 py-3 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                Download Resume
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: "Resume",
    data() {
        return {
            isDarkMode: true,
            themeObserver: null,
        }
    },
    setup() {
        useHead({
            title: 'Resume - Douglas Leslie',
            meta: [
                {
                    name: 'description',
                    content: 'This page contains a pdf of my resume containing my experience in detail'
                },
            ]
        })
        return {}
    },
    computed: {
        pdfUrl() {
            return this.isDarkMode ? '/resume_dark.pdf' : '/resume_light.pdf';
        },
    },
    mounted() {
        if (import.meta.client) {
            this.syncThemeFromDocument();
            this.themeObserver = new MutationObserver(() => this.syncThemeFromDocument());
            this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        }
    },
    unmounted() {
        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }
    },
    methods: {
        syncThemeFromDocument() {
            this.isDarkMode = document.documentElement.classList.contains('dark');
        },
    },
};
</script>
