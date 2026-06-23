<template>
    <div>
        <div ref="cardEl" class="card-el bg-gray-100 dark:bg-neutral-800 rounded-xl p-5 md:p-6 shadow-sm flex flex-col gap-4 cursor-pointer"
            role="button" tabindex="0" :aria-label="`View details for ${project.name}`" aria-haspopup="dialog"
            @click="handleActivate" @keydown.enter.prevent="handleActivate" @keydown.space.prevent="handleActivate">
            <div class="pointer-events-none">
                <ScreenshotGallery :screenshots="project.screenshots" :projectName="project.name" />
            </div>

            <div>
                <h3 class="font-mono text-xl md:text-2xl font-bold text-black dark:text-white">
                    {{ project.name }}
                </h3>
                <p class="mt-2 text-base">{{ project.summary }}</p>
            </div>

            <ul class="flex flex-wrap gap-2">
                <li v-for="tech in project.techStack" :key="tech"
                    class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                    {{ tech }}
                </li>
            </ul>

            <div class="flex flex-wrap gap-3 mt-auto pt-2">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold bg-primary dark:bg-yellow-400 text-white dark:text-black hover:bg-primary_hover transition">
                    View Live
                </a>
                <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    View Code
                </a>
                <a v-if="project.demoVideoUrl" :href="project.demoVideoUrl" target="_blank" rel="noopener noreferrer"
                    @click.stop
                    class="px-4 py-2 rounded-md text-sm font-mono font-bold border border-primary dark:border-yellow-400 text-primary dark:text-yellow-400 hover:bg-primary hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition">
                    Watch Demo
                </a>
            </div>
        </div>

        <!-- Shared-element morph: a floating clone that grows + spins from the card's exact
             position/size into the modal's position/size. The real modal is mounted only once
             both the move/scale transition and the 3D spin have finished. -->
        <Teleport to="body">
            <div v-if="isTransitioning" class="morph-backdrop" :class="{ 'is-visible': morphActive }"></div>
            <div v-if="isTransitioning" ref="morphOuter" class="morph-outer" :class="{ 'is-animating': morphActive }"
                :style="morphOuterStyle" @transitionend="onOuterTransitionEnd">
                <div ref="morphInner" class="morph-inner" :class="{ 'is-spinning': morphActive }"
                    @animationend="onInnerAnimationEnd">
                    <div class="morph-face morph-face-front bg-gray-100 dark:bg-neutral-800">
                        <h3 class="font-mono text-xl font-bold text-black dark:text-white">{{ project.name }}</h3>
                        <p class="mt-2 text-base">{{ project.summary }}</p>
                        <ul class="flex flex-wrap gap-2 mt-3">
                            <li v-for="tech in project.techStack" :key="tech"
                                class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/10 text-primary dark:bg-yellow-400/10 dark:text-yellow-400">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                    <div class="morph-face morph-face-back bg-white dark:bg-neutral-900">
                        <h3 class="font-mono text-2xl font-bold text-black dark:text-white">{{ project.name }}</h3>
                        <p class="mt-3">{{ project.bio || project.summary }}</p>
                    </div>
                </div>
            </div>
        </Teleport>

        <ProjectModal :open="isModalOpen" :project="project" :skip-open-animation="skipModalOpenAnim"
            @close="closeModal" />
    </div>
</template>

<script>
import ScreenshotGallery from "~/components/ScreenshotGallery.vue";
import ProjectModal from "~/components/ProjectModal.vue";

export default {
    name: "ProjectCard",
    components: {
        ScreenshotGallery,
        ProjectModal,
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isModalOpen: false,
            isTransitioning: false,
            morphActive: false,
            skipModalOpenAnim: false,
            pendingMorphEnds: 0,
            morphOuterBase: { top: 0, left: 0, width: 0, height: 0 },
            morphInitialTransform: 'translate(0px, 0px) scale(1, 1)',
        };
    },
    computed: {
        morphOuterStyle() {
            const base = this.morphOuterBase;
            return {
                top: `${base.top}px`,
                left: `${base.left}px`,
                width: `${base.width}px`,
                height: `${base.height}px`,
                transform: this.morphActive ? 'translate(0px, 0px) scale(1, 1)' : this.morphInitialTransform,
            };
        },
    },
    methods: {
        canAnimate() {
            if (typeof window === 'undefined' || !window.matchMedia) return false;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            return hoverCapable && !prefersReducedMotion;
        },
        handleActivate() {
            if (this.isModalOpen || this.isTransitioning) return;
            if (!this.canAnimate()) {
                this.skipModalOpenAnim = false;
                this.openModal();
                return;
            }
            this.startMorph();
        },
        startMorph() {
            const cardRect = this.$refs.cardEl.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const targetWidth = Math.min(672, viewportWidth - 32);
            const targetHeight = Math.min(viewportHeight * 0.85, 480);
            const targetTop = (viewportHeight - targetHeight) / 2;
            const targetLeft = (viewportWidth - targetWidth) / 2;

            this.morphOuterBase = { top: targetTop, left: targetLeft, width: targetWidth, height: targetHeight };

            const dx = (cardRect.left + cardRect.width / 2) - (targetLeft + targetWidth / 2);
            const dy = (cardRect.top + cardRect.height / 2) - (targetTop + targetHeight / 2);
            const scaleX = cardRect.width / targetWidth;
            const scaleY = cardRect.height / targetHeight;
            this.morphInitialTransform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;

            this.pendingMorphEnds = 2;
            this.morphActive = false;
            this.isTransitioning = true;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.morphActive = true;
                });
            });
        },
        onOuterTransitionEnd(event) {
            if (event.propertyName !== 'transform' || event.target !== this.$refs.morphOuter) return;
            this.completeMorphStep();
        },
        onInnerAnimationEnd(event) {
            if (event.target !== this.$refs.morphInner) return;
            this.completeMorphStep();
        },
        completeMorphStep() {
            this.pendingMorphEnds -= 1;
            if (this.pendingMorphEnds <= 0) {
                this.finishMorph();
            }
        },
        finishMorph() {
            this.isTransitioning = false;
            this.morphActive = false;
            this.skipModalOpenAnim = true;
            this.openModal();
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>

<style scoped>
.card-el {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

@media (hover: hover) and (pointer: fine) {
    .card-el:hover {
        transform: scale(1.03);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(50, 168, 82, 0.3);
    }
}

.card-el:focus-visible {
    outline: 2px solid #32a852;
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .card-el {
        transition: none;
    }

    .card-el:hover {
        transform: none;
        box-shadow: none;
    }
}

.morph-backdrop {
    position: fixed;
    inset: 0;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.5s ease;
}

.morph-backdrop.is-visible {
    background-color: rgba(0, 0, 0, 0.6);
}

.morph-outer {
    position: fixed;
    z-index: 60;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    perspective: 1400px;
    will-change: transform;
}

.morph-outer.is-animating {
    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.morph-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.morph-inner.is-spinning {
    animation: morph-spin-y 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes morph-spin-y {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}

.morph-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    padding: 1.5rem;
    overflow: auto;
}

.morph-face-front {
    transform: rotateY(0deg);
}

.morph-face-back {
    transform: rotateY(180deg);
}
</style>
