<template>
    <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 md:gap-8 md:text-left pt-11">
        <ExperienceItem v-for="(job, index) in jobs" :key="index" :company="job.company" :role="job.role"
            :duration="job.duration" :link="job.link" />
    </ol>
</template>

<script>
import ExperienceItem from './ExperienceItem.vue'

export default {
    name: 'ExperienceList',
    components: {
        ExperienceItem,
    },
    props: {
        jobs: {
            type: Array,
            required: true,
        },
    },
}
</script>