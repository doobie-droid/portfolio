<template>
    <div class="pdf-viewer flex flex-col items-center justify-center   w-full gap-4">
        <canvas ref="pdfCanvas" class="border border-black dark:border-white"></canvas>

        <div class="flex gap-4">
            <button @click="prevPage"
                class=" rounded-full w-8 h-8 p-2 border border-primary dark:border-yellow-400 hover:bg-primary dark:hover:bg-yellow-400 transition text-primary dark:text-yellow-400 hover:text-white dark:hover:text-black  flex justify-center items-center">
                <LeftArrow />
            </button>
            <button @click="nextPage"
                class="rounded-full w-8 h-8 p-2 border border-primary dark:border-yellow-400 hover:bg-primary dark:hover:bg-yellow-400 transition text-primary dark:text-yellow-400 hover:text-white dark:hover:text-black  flex justify-center items-center">
                <RightArrow />
            </button>
        </div>
        <div class="font-mono dark:text-white">Page <em class="text-primary dark:text-yellow-400">{{ pageNumber
                }}</em> of 3</div>
    </div>
</template>

<script>
import LeftArrow from '~/components/icons/LeftArrow.vue';
import RightArrow from '~/components/icons/RightArrow.vue';
export default {
    name: "Open Source",
    components: {
        LeftArrow,
        RightArrow
    },
    data() {
        return {
            pageNumber: 1,
            pdfScale: 1.5,
            pdfUrl: ''
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
    mounted() {
        if (import.meta.client) {
            this.loadPdf()
        }
    },
    methods: {
        nextPage() {
            if (this.pageNumber < 3) {
                this.pageNumber++
            }
            this.loadPdf()
        },
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--
            }
            this.loadPdf()
        },
        getValidScale() {
            this.viewportWidth = window.innerWidth
            //scale looks best at a minimum of 0.7 and a max of 1.5 through trial and error
            const scale = Math.min(
                1.5,
                Math.max(0.7, parseFloat((this.viewportWidth / 1000).toFixed(1)))
            )
            return scale
        },
        changePdfUrlToMatchTheme() {
            const config = useRuntimeConfig()
            const theme = localStorage.getItem("theme");
            if (theme === 'light') {
                this.pdfUrl = `${config.public.baseURL}/resume_light.pdf`
            } else {
                this.pdfUrl = `${config.public.baseURL}/resume_dark.pdf`
            }
        },
        async loadPdf() {

            const pdfjsLib = await import('https://mozilla.github.io/pdf.js/build/pdf.mjs')

            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs'

            this.changePdfUrlToMatchTheme()

            try {
                const loadingTask = pdfjsLib.getDocument(this.pdfUrl)
                const pdf = await loadingTask.promise

                const page = await pdf.getPage(this.pageNumber)

                const scale = this.getValidScale()
                const viewport = page.getViewport({ scale })

                const canvas = this.$refs.pdfCanvas

                const context = canvas.getContext('2d')
                canvas.height = viewport.height
                canvas.width = viewport.width

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                }

                await page.render(renderContext).promise
            } catch (err) {
                console.error('Failed to load PDF:', err)
            }
        }
    }
};
</script>