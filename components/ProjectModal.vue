<template>
    <Teleport to="body">
        <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
            :class="{ 'is-instant': skipOpenAnimation }" @click="close" @keydown.esc="close">
            <div ref="panel" role="dialog" aria-modal="true" :aria-labelledby="titleId" tabindex="-1"
                class="modal-panel relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-xl p-6 md:p-8 shadow-2xl"
                :class="{ 'is-instant': skipOpenAnimation }" @click.stop @keydown="onPanelKeydown">

                <button ref="closeButton" type="button" @click="close" aria-label="Close project details"
                    class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    <IconClose />
                </button>

                <h3 :id="titleId" class="font-mono text-2xl md:text-3xl font-bold text-black dark:text-white pr-12">
                    {{ project.name }}
                </h3>

                <div class="mt-4">
                    <ProjectMedia :screenshots="[]" :demoVideoUrl="project.demoVideoUrl"
                        :projectName="project.name" />
                </div>

                <p class="mt-4">{{ project.bio || project.summary }}</p>

                <div v-if="project.features && project.features.length" class="mt-4">
                    <h4 class="font-mono font-bold text-black dark:text-white mb-2">Key Features</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li v-for="feature in project.features" :key="feature"
                            class="text-base text-zinc-700 dark:text-zinc-300">{{ feature }}</li>
                    </ul>
                </div>

                <ul class="flex flex-wrap gap-2 mt-4">
                    <li v-for="tech in project.techStack" :key="tech"
                        class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                        {{ tech }}
                    </li>
                </ul>

                <div class="flex flex-wrap gap-3 mt-6">
                    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                        class="px-4 py-2 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                        View Live
                    </a>
                    <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer"
                        class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                        View Code
                    </a>
                    <a v-if="project.demoVideoUrl" :href="project.demoVideoUrl" target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                        Watch Demo
                    </a>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import IconClose from '~/components/icons/IconClose.vue';
import ProjectMedia from '~/components/ProjectMedia.vue';

export default {
    name: "ProjectModal",
    components: {
        IconClose,
        ProjectMedia,
    },
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        project: {
            type: Object,
            required: true,
        },
        skipOpenAnimation: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['close'],
    data() {
        return {
            previouslyFocusedElement: null,
        };
    },
    computed: {
        titleId() {
            return `project-modal-title-${this.project.id}`;
        },
    },
    watch: {
        open(isOpen) {
            if (isOpen) {
                this.previouslyFocusedElement = document.activeElement;
                document.addEventListener('keydown', this.onKeydown);
                this.$nextTick(() => {
                    this.$refs.closeButton && this.$refs.closeButton.focus();
                });
            } else {
                document.removeEventListener('keydown', this.onKeydown);
                if (this.previouslyFocusedElement) {
                    this.previouslyFocusedElement.focus();
                }
            }
        },
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
    },
    methods: {
        close() {
            this.$emit('close');
        },
        onKeydown(event) {
            if (event.key === 'Escape') {
                this.close();
            }
        },
        getFocusableElements() {
            if (!this.$refs.panel) return [];
            return Array.from(
                this.$refs.panel.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            );
        },
        onPanelKeydown(event) {
            if (event.key !== 'Tab') return;
            const focusable = this.getFocusableElements();
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        },
    },
};
</script>

<style scoped>
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    animation: fade-in 0.2s ease-out;
}

.modal-panel {
    animation: pop-in 0.25s ease-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

/* Used when a card has just morphed into the modal — a quick settle instead of a full pop-in/fade-in,
   so the hand-off from the morph overlay doesn't read as a hard cut or a repeated entrance. */
.modal-backdrop.is-instant {
    animation: fade-in-fast 0.15s ease-out;
}

.modal-panel.is-instant {
    animation: settle-in 0.15s ease-out;
}

@keyframes fade-in-fast {
    from {
        opacity: 0.6;
    }

    to {
        opacity: 1;
    }
}

@keyframes settle-in {
    from {
        opacity: 0.85;
        transform: scale(0.97);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.modal-panel::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes pop-in {
    from {
        opacity: 0;
        transform: scale(0.92);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (prefers-reduced-motion: reduce) {

    .modal-backdrop,
    .modal-panel,
    .modal-backdrop.is-instant,
    .modal-panel.is-instant {
        animation: none;
    }
}
</style>
